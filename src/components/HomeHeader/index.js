import React, { Component } from 'react'; 
import PureRenderMixin from 'react-addons-pure-render-mixin'  
import { Link } from "react-router-dom"; 

import SearchInput from '../SearchInput' 
import './style.less'   
class index extends Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        }
    }

    render() {
        let { cityName } = this.props.cityName;
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/Login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        &nbsp; 
                        <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                    </div>
                </div>
            </div> 
        );
    }

    componentDidMount(){//默认值
        // console.log(this.props,'iii')
    }

    enterHandle(value) {
        this.props.history.push('/search/all/' + encodeURIComponent(value))
    }
}
export default index;