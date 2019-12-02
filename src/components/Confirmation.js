import React from 'react';
import OrderPostHelper from './OrderPostHelper';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewing: 'order'
      }
      this.onPlaceOrder = this.onPlaceOrder.bind(this);

    }
    deliveryCharge = 1.50;
    total = (parseFloat(this.props.fPrice) + parseFloat(this.props.bPrice) + parseFloat(this.props.tPrice) + this.deliveryCharge).toFixed(2);
    tax = (this.total * .0875).toFixed(2);
    todaysDate = new Date();

    onPlaceOrder(){
      this.setState({
          viewing : 'confirmed'
      });
    }
  
    totalWithTax = (parseFloat(this.total)+ parseFloat(this.tax)).toFixed(2);

      render() {
        if (this.state.viewing === 'order'){
          return (
                  <div id="orderBackground">
                      <h2> Base: </h2>
                      <span>{this.props.base} ${this.props.bPrice}</span>
                      <br/>
                      <h2> Frosting: </h2>
                      <span>{this.props.frosting} ${this.props.fPrice}</span>
                      <br/>
                      <h2>Toppings: </h2>
                      <span>{this.props.toppings} ${this.props.tPrice}</span>
                      <br/>
                      <h2>Totals: </h2> 
                      <span>Delivery Charge: $1.50</span>
                      <br/>
                      <span>Tax: ${this.tax}</span>
                      <br/>
                      <span>Total without tax: ${this.total}</span>
                      <br/>
                      <span>Total with tax: ${this.totalWithTax}</span>
                      <br/>
                      <button onClick={this.onPlaceOrder}>Place Order</button>
                  </div>

          );
      }    
      else if (this.state.viewing = 'confirmed'){
        return ( 
          <div>
                <OrderPostHelper  base={this.props.bObject} 
                                  frosting={this.props.fObject}
                                  toppings={this.props.tObject}
                                  date={this.todaysDate}
                />
          </div>
        );
      }
    }
  }

export default Confirmation;
