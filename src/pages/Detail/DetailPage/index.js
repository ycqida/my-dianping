import React, { Component } from 'react';
class index extends Component {
    state = {  }

    componentWillMount(){
        console.log(this.props,'detailssss')
    }
    
    render() {
        let  { id } = this.props.match.params;
        return (
            <div>
                这个页面是详情页面的说明 { id }
            </div>
        );
    }
}

export default index;