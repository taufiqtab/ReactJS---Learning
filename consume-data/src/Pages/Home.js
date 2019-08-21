import React, { Component } from 'react';
import { Test } from "../ConfigTest";

class Home extends Component{
    constructor(props){
        super(props);
        //this.getData()
    }

    state = {
        transaction: [],
        loading : false,
        // number:1,
        // name: ""
    }
    
    componentWillMount(){
        this.setState({ loading: true })
        let customerId = "sevengaze24@gmail.com";

        fetch(Test+customerId, {
            method: 'GET',
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.data)
            console.log(Test);
            if(response.data[0].brand_name === "Vivo"){
                console.log("ada vivo");
                                
            }

            this.setState({
                ...this.state,
                transaction: response.data,
                loading: false
            })
        
        })
        .catch(error => this.setState({error, loading:false}))
    }

    render(){
        const { transaction, loading } = this.state;

        if(loading){
            return(
                <div>
                    Loading...
                </div>
            )
        }else{
            return (
                <div>
                    <ul>
                        {
                            transaction.map( (transaction, i)=>
                                <li key={i}> 
                                    <div>Company Name: {transaction.company_name}</div>
                                    <div>Brand Name: { (transaction.brand_name) ? 'vivo' : transaction.brand_name  }</div>
                                    <div>Brand Name: { transaction.brand_name  }</div>

                                </li>
                            )
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default Home;