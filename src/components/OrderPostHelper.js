import React from 'react';
import axios from 'axios';

class OrderPostHelper extends React.Component {
    constructor(props){
     super(props);
     this.state = {
         'order':{
                'cupcakes':[
                    'cupcake':{
                        'base': this.props.base,
                        'frosting': this.props.frosting,
                        'topping': this.props.topping 
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
      
      <div id="signup">

      </div>

     );
    }
   }
   
export default OrderPostHelper;
