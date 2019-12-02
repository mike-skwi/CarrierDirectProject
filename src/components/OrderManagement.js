import React from 'react';
import axios from 'axios';

class OrderManagement extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         orders:[]
        }
    }

     componentDidMount(props){
        let received = [];
        fetch("http://localhost:4000/cupcakes/orders/")
        .then((Response)=>Response.json())
        .then((findresponse)=>
        {
            received.push(findresponse)
        })
        this.setState({
            orders : received
        })    
    }
    render () {
        return (
            <ul>
                <p> This is where I left off. I ran out of time to do the table part, but the posting works. </p>
            </ul>
        );
    }
   }
   
export default OrderManagement;
