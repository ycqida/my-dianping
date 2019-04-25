import React, { Component } from 'react'; 

class index extends Component {
    state = {  }
    
    componentWillMount(){ 
        console.log(this.props,'detail')
    }
    
    render() { 
        return (
            <div>
                <p>详情页面12</p>
                
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul> 
                 
                
            </div>
        );
    }
}

export default index;