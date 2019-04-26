import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '@/components/Header';
import LoginComponent from '@/components/Login';

import * as userInfoActionsFromOtherFile from '@/store/actions/userinfo';

import { USERNAME }  from '@/config/localStoreKey';
import localStore  from '@/util/localStore';

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Header title="登录"/>
                {
                    //等待验证之后再显示登录显示
                    this.state.checking ? <div>等待中，请稍后...</div> : <LoginComponent loginHandle={this.loginHandle}/>
                }
            </div> 
        );
    }
    componentWillMount() {//组件即将被渲染到页面之前触发 此时可以开启定时器 
        if(localStore.getItem(USERNAME) != ''){
            this.props.history.replace('/user')
        }
    }
    componentDidMount () {//此时页面中有了真正的DOM的元素,可以进行DOM相关的操作
        //console.log(this.props,'22222')
    }
    //处理登录
    loginHandle = (phone) => {
        const actions = this.props.userInfoActions; 
        actions.update({
            username: phone
        });

        localStore.setItem(USERNAME,phone);

        const url = this.props.location.from ? this.props.location.from.pathname : '/';
        this.goUserPage(url);
    }
    //跳转到用户列表
    goUserPage = (url) => {
        this.props.history.push(url)
    }
}


// ---redux react绑定----------------------------
function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index)