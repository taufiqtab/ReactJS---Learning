import React, { Component } from 'react';
import HeaderTesting from '../Components/HeaderTesting';

class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="container">
                <div id="header">
                    <HeaderTesting colorHeader="red"/>
                </div>
                <div id="mainBody">
                    {this.props.name}
                </div>
            </div>
        )
    }
}
//a
export default Home;