import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {  };
    }
    render() {
        return (
            <div>
                orderList
            </div>
        );
    }
}

export default index;