import React from 'react';
import axios from 'axios';
import OrderManagement from './OrderManagement.js'

class OrderPostHelper extends React.Component {
    constructor(props){
     super(props);
     this.state = {
            "order": {
              "cupcakes": [{
                        'frosting':this.props.frosting,
                        'toppings': [this.props.toppings],
                        'base':this.props.base
                    }
              ],
               'delivery_date':(this.props.date).toString()
            }
        }
    }

     componentDidMount(props){
        axios.post('http://localhost:4000/cupcakes/orders/',this.state)
        .then(response => {
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
        
    render () {
        return (
            <div>
                <OrderManagement/>
            </div>        
     );
    }
   }
   
export default OrderPostHelper;
