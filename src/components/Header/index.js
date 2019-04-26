import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { withRouter } from 'react-router'
import './style.less';

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {

        };
    }
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }

    clickHandle = () => {
        const backRouter = this.props.backRouter;
        let history = this.props.history;
        if(backRouter) {
            history.push(backRouter)
        } else {
            window.history.back()
        }
    }
}

export default withRouter(index);