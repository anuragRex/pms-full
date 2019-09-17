import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getAllSocialData } from '../queries';

class Social extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }  
    displaySocial(){
        const { data } = this.props;
        if(data.loading) return (<div>Loading data ...</div>)

        return data.getAllSocialData.map((data, index) => {
            return (
                <div key={index}>
                    <p>******************************************************************</p>
                    Associations : <ul>{data.associations.map((el, index) => <li key={index}>{el}</li> )}</ul>
                    <p>Self Evaluation: {data.selfEvaluation}</p>
                    <p>Product Services: {data.productServices}</p>
                    <p>Competitor : {data.competitor}</p>
                    <p>Partnerships : {data.partnerships}</p>
                    <br></br>
                </div>
            )
        })
    }
    render(){
        return (
            <div className="social">
                <p>Social Data</p>
                {this.displaySocial()}
            </div>
        );
    }
}

export default graphql(getAllSocialData)(Social);
