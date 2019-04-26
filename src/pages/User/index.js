import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Redirect } from 'react-router-dom';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' 

import Header from '@/components/Header';
import UserInfo from '@/components/UserInfo';
 
import OrderList from './subpage/OrderList'

import { USERNAME } from '@/config/localStoreKey';
import localStore from '@/util/localStore';

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isLogin: false,
            userinfo: {}
        };
    }
    componentWillMount() {
        if(this.props.userinfo.username == null && localStore.getItem(USERNAME) == null) { 
            this.setState({
                isLogin: true
            })
        } else {
            let userinfo = {}
            userinfo.cityName = this.props.userinfo.cityName;
            userinfo.username = this.props.userinfo.username || localStore.getItem(USERNAME) 
            this.setState({
                userinfo: userinfo
            });
        }
    }
    render() { 
        const { userinfo } = this.state;
        // {/* 记录跳转的URL */}
        return (
            this.state.isLogin ? <Redirect to={{
                pathname: "/login",
                from: this.props.location
              }} /> 
              : 
              <div>
                <Header title="用户主页" backRouter="/home" />
                <UserInfo username={userinfo.username} city={userinfo.cityName} />
                <OrderList username={userinfo.username} />
            </div>
        );
    }

    componentDidMount() {//组件已经被渲染到页面中后触发
        
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index)