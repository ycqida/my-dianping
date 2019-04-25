// 部分页面公共模板
import React, { Component } from 'react';
class template extends Component {
    state = {  }

    componentWillMount(){
        console.log(this.props)
    }

    render() {
        return (
           <div className="template">
                <div className="header">template 模板的头部</div>
                    {this.props.children}
                <div className="footer">template 模板的脚部</div>
           </div> 
        );
    }
}

export default template;