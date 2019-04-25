import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'
import './style.less'

class index extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="list-container">
                {this.props.data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        );
    }
}

export default index;