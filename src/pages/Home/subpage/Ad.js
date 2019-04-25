import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '@/components/HomeAd/index'
import { getAdData } from '@/fetch/home/home.js'
class Ad extends Component {

    constructor(props,context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                { this.state.data.length > 0 && <HomeAd data={this.state.data} /> } 
            </div>
        )
    }

    componentDidMount() {
        //获取广告数据
        const result = getAdData();
        result.then((res) => {
            return res.json();
        }).then(json => {
            var data = json;
            if(data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            //发生错误
            //if (__DEV__) {
            console.error('首页广告获取数据报错', ex.message)
        })
    }
}
export default Ad;