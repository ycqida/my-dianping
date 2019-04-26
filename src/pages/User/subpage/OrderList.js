import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import OrderListComponent from '@/components/OrderList'
import { USERNAME }  from '@/config/localStoreKey';

import { getOrderListData } from '@/fetch/user/orderlist';

import './style.less'

class OrderList extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        };
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                    : <div className='load-more'>正在加载中...</div>
                }
            </div>
        );
    }
    componentWillMount() {
        // console.log(this.props,'orderLIst')
    }

    componentDidMount() {
        //获取订单数据
        const username = this.props.username;
        if(username) {
            this.loadOrderList(username)
        }
    }

    loadOrderList = (username) => { 
        const result = getOrderListData(username);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        }).catch(e => {
            console.error('用户主页“订单列表”获取数据报错, ', e.message)
        })
    }

    submitComment = () => {
        console.log(123)
    }
}

export default OrderList;