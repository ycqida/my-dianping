import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
class index extends Component {
    constructor(props, context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <input type="text"
                className='search-input'
                placeholder='请输入关键字'
                value={this.state.value}
                onChange = {this.changeHandle}
                onKeyDown = {this.KeyUpHandle}
            />
        )
    }

    componentDidMount(){//默认值
        this.setState({
            value: this.props.value || ''
        })
    }

    changeHandle = (e) => {// 监控变化
        this.setState({
            value: e.target.value
        })
    }

    KeyUpHandle = (e) => {// 监控 enter 事件
        if(e.keyCode !== 13) {
            return;
        }
        this.props.enterHandle(e.target.value)
    }
}
export default index;