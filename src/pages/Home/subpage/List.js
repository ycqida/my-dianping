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
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                <h2 className='home-list-title'>猜你喜欢</h2>
                { this.state.data.length > 0 ?  <ListCompoent data={this.state.data}/> : <div className='load-more'>正在加载中...</div>}
                { this.state.hasMore && <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> }
            </div>
        );
    }
    //获取首页数据
    componentDidMount() {
        this._isMounted = true;
        this.loadFirstPageData();
    }
    loadFirstPageData = () => {
        const cityName = this.props.cityName;
        const result = getListData(cityName,0);

        this.resultHandle(result); 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    //加载更多
    loadMoreData = () => {
        //是否还有更多数据
        this.setState({
            isLoadingMore: true
        }); 
        const cityName = this.props.cityName;
        const page = this.state.page;
        const result = getListData(cityName,page); 
        this.resultHandle(result);
    }
    //处理数据
    resultHandle = (result) => {
        result.then(res => {
            return res.json();
        }).then(json => {
            if(this._isMounted) {
                const hasMore = json.hasMore;
                const data = json.data;
                this.setState({
                    hasMore: hasMore,
                    data: this.state.data.concat(data)
                });
            }
            
        }).catch(ex => {
            console.log('首页猜你喜欢的数据获取报错,', ex.message)
        }) 
    }
}

export default List;