import React from 'react';
import axios from 'axios';

class OrderPostHelper extends React.Component {
    constructor(props){
     super(props);
     this.state = {
            "order": {
              "cupcakes": [{
                        // 'frosting':this.props.frosting,
                        // 'toppings':this.props.topping,
                        // 'base':this.props.base
                        'frosting':{
                            "key": "vanillaFrosting",
                            "name": "Vanilla Frosting",
                            "price": 15,
                            "ingredients": [
                            "vanilla frosting"
                            ]
                        },
                        'toppings':[{
                            "key": "sprinkles",
                            "name": "Sprinkles",
                            "price": 10,
                            "ingredients": [
                            "sprinkles"
                            ]                            
                        }],
                        'base':{
                            "key": "peanutButterBase",
                            "name": "Peanut Butter Base",
                            "price": 85,
                            "ingredients": [
                            "peanut butter cup cake"
                            ]
                    }
              }],
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
