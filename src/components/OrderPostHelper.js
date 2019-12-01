import React from 'react';

class OrderPostHelper extends React.Component {
    constructor(props){
     super(props);
    //  this.handleSubmit = this.handleSubmit.bind(this);
    }
   
     componentDidMount(props){
        fetch('http://localhost:4000/cupcakes/orders/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },body: JSON.stringify({
                cupcakes: [{
                    'base': '',
                    'frosting': '',
                    'toppings': '',
                    'totalWithoutTax': '',
                    'tax': '',
                    'totalWithTax': '',
                }],
                'delivery_date':''
            }),
            }).then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            }).catch((error) => {
                console.error(error);
            });
    };
   
    render () {
     return (
      
      <div id="signup">

      </div>

     );
    }
   }
   
export default OrderPostHelper;
