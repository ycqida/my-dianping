import React, { Component } from 'react';

class index extends Component {
    state = {  }
    render() {
        return (
            <div>
                search 列表
            </div>
        );
    }
    componentDidMount() {
        console.log(this.props,'as')
    }
}

export default index;