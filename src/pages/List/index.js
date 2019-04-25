import React, { Component } from 'react';
import { matchRoutes } from "react-router-config";

import { routes }  from '@/router/routeMap';
import Template from '@/components/Template';

class index extends Component {
    state = {  }
    
    tourl = (a) => {
        let t = matchRoutes(routes, "/detail/2");
        console.log(t,'345')

        this.props.history.push('/detail/2')
    }

    render() {
        return (
            <Template>
                <div>
                    <ul>
                        <li onClick={this.tourl.bind(this,1)}>1</li>
                        <li onClick={this.tourl.bind(this,2)}>2</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                        <li>1</li>
                    </ul>
                </div>
            </Template>
        );
    }
}

export default index;