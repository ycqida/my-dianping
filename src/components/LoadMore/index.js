import React, { Component } from 'react';

import './style.less'


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
           <div className='load-more' ref='wrapper'>
            {
                this.props.isLoadingMore ? <span> 加载中... </span> : <span onClick={this.props.loadMoreFn}>加载更多</span>
            }
           </div>
        );
    }
}

export default index;