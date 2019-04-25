import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '@/fetch/home/home'
import ListCompoent from '@/components/List'
import LoadMore from '@/components/LoadMore'

import './style.less'

class List extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        };
        
    }
    render() {
        return (
            <div>
                <h2 className='home-list-title'>猜你喜欢</h2>
                { this.state.data.length > 0 && <ListCompoent data={this.state.data}/> }
                { this.state.hasMore && <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> }
            </div>    
        );
    }
    componentDidMount() {
        //获取首页数据
        this.loadFirstPageData();
    }
    loadFirstPageData = () => {
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);

        this.resultHandle(result)
    }
    resultHandle = (result) => {//处理数据
        result.then(res => {
            return res.json();
        }).then(json => {
            const hasMore = json.haMore;
            const data = json.data;
            this.setState({
                hasMore: hasMore,
                data: this.state.data.concat(data)
            });
        }).catch(ex => {
            console.log('首页猜你喜欢的数据获取报错,', ex.message)
        })
    }
}

export default List;