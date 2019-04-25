import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

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
            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return <div key={index} className="ad-item float-left">
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div> 
        );
    }
}

export default index;
