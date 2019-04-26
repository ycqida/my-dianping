import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '@/components/Header'; 
import CurrentCity from '@/components/CurrentCity'
import CityList from '@/components/CityList'

import * as userInfoActionsFromOtherFile from '@/store/actions/userinfo'; 

import { CITYNAME } from '@/config/localStoreKey'
import localStore from '@/util/localStore'

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        };
    }
    render() {
        return (
            <div className='city'>
              <Header title="选择城市"/>
              <CurrentCity cityName={this.props.userinfo.cityName} />
              <CityList changeFn={this.changeCity}/>
            </div>
        );
    }

    changeCity = (city) => { 
        let userinfo = {
            cityName: city
        }
        this.props.userInfoActions.update(userinfo);
        
        //修改本地localStroge
        localStore.setItem(CITYNAME, city);

        this.props.history.push('/')
    }
}


// --------redux react 绑定--------------

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
)(index);