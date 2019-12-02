import React from 'react';
import CupcakeReciever from './CupcakeReciever.js';
import Selection from './Selection.js';
import Confirmation from './Confirmation.js';
class CupcakeBuilder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        bases : [],
        toppings : [],
        frostings : [],
        activeSelection : 'base',
        selectedBase: '',
        selectedFrosting: '',
        selectedTopping: [],
        startedButtonClicked : false,

        baseObject:{},
        toppingObjectTemp:[],
        toppingObject:[],
        frostingObject:{}
    } 
    this.cupcakeCallback = this.cupcakeCallback.bind(this);
    this.cupcakeSelect = this.cupcakeSelect.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.goToConfirmation = this.goToConfirmation.bind(this);
  }


    cupcakeSelect(e,test){
        if (this.state.activeSelection === 'base'){
            this.setState({
                selectedBase : e.target.getAttribute('value'),
                activeSelection : 'frosting',
                baseObject: this.state.bases[e.target.getAttribute('data')]
            })
        }
        else if (this.state.activeSelection === 'frosting'){
            this.setState({
                selectedFrosting : e.target.getAttribute('value'),
                activeSelection : 'topping',
                frostingObject: this.state.frostings[e.target.getAttribute('data')]

            })
        }
        else if (this.state.activeSelection === 'topping'){
            var newToppings = this.state.selectedTopping;
            newToppings.push(e.target.getAttribute('value'));
            var temp = this.state.toppingObject
            this.temp = temp.push(this.state.toppings[e.target.getAttribute('data')])

            this.setState({
                selectedTopping : newToppings,
                toppingObject : temp
            })
        }   
    }

  cupcakeCallback(dataFromChild){
    var newBases = dataFromChild[0].bases;
    var newToppings = dataFromChild[1].toppings;
    var newFrostings = dataFromChild[2].frostings;
    this.setState({
        bases : newBases,
        toppings : newToppings,
        frostings : newFrostings,
        startedButtonClicked : true
    })
  }

  goToConfirmation(){
    this.setState({
        activeSelection : 'confirmation'
    })
  }

  getPrice(type,item){
      var price = 0;
      if (type === 'frosting'){
        for (var i = 0; i < this.state.frostings.length; i++ ) {
            if (this.state.frostings[i].name === item){
                price = this.state.frostings[i].price;
            }
        }
      }
      else if (type === 'bases'){
        for (var i = 0; i < this.state.bases.length; i++ ) {
            if (this.state.bases[i].name === item){
                price = this.state.bases[i].price;
            }
        }
      }
      else{
        for (var j = 0; j < this.state.selectedTopping.length; j++){
            for (var i = 0; i < this.state.toppings.length; i++ ) {
                if (this.state.toppings[i].name === this.state.selectedTopping[j]){
                    price += this.state.toppings[i].price;
                }
            }
        }
      }
      return (price/100).toFixed(2);
  }


  onBackClick(){
      if (this.state.activeSelection === 'frosting'){
        this.setState({
            selectedFrosting : '',
            activeSelection : 'base',
            frostingObject : {}
        })
      }
      else if (this.state.activeSelection === 'topping'){
        this.setState({
            selectedTopping : [],
            activeSelection : 'frosting',
            toppingObject : {}

        })
      }
      else{
        this.setState({
            selectedTopping : [],
            activeSelection : 'topping',
            startedButtonClicked : true,
            toppingObject : [],
            toppingObjectTemp : []
        })
      }
  }

  render() {
    if (this.state.activeSelection === 'base'){
        return (
            <div className="CupcakeBuilder">
                  <h1 class="appBanner">Tinycakes Cupcake Order Maker</h1>
                  <CupcakeReciever selectedAlready={this.state.startedButtonClicked} callbackFromParent={this.cupcakeCallback} requested={["bases","toppings","frostings"]}/>
                  <br/>
                  <Selection onClick={this.cupcakeSelect} id={'Base'} passedArray={this.state.bases}/>
            </div>
          );      
    }
    else if (this.state.activeSelection === 'frosting'){
        return(
            <div className="CupcakeBuilder">
                  <h1 class="appBanner">Tinycakes Cupcake Order Maker</h1>
                  <Selection onClick={this.cupcakeSelect} id={'Frosting'} passedArray={this.state.frostings}/>      
                  <br/>
                  <button onClick={this.onBackClick}>Back</button>
            </div>
        );
    }
    else if(this.state.activeSelection === 'topping'){
        return(
            <div className="CupcakeBuilder">
                  <h1 class="appBanner">Tinycakes Cupcake Order Maker</h1>
                  <Selection onClick={this.cupcakeSelect} id={'Topping'} passedArray={this.state.toppings}/>
                  <br/>
                  <button onClick={this.onBackClick}>Back</button>
                  <button onClick={this.goToConfirmation}>Go To Confirmation Screen</button>
            </div>
        );
    }
    else if (this.state.activeSelection === 'confirmation') {
        return(
            <div className="CupcakeBuilder">
                <h1>Confirmation</h1>
                <Confirmation   toppings={this.state.selectedTopping}
                                base={this.state.selectedBase}
                                frosting={this.state.selectedFrosting}
                                bPrice={this.getPrice('bases',this.state.selectedBase)}
                                fPrice={this.getPrice('frosting',this.state.selectedFrosting)}
                                tPrice={this.getPrice('toppings',this.state.selectedTopping)}
                                bObject={this.state.baseObject}
                                fObject={this.state.frostingObject}
                                tObject={this.state.toppingObject}
                />
                <br/>
                <button onClick={this.onBackClick}>Back</button>
            </div>
        );
    }
  }
}

export default CupcakeBuilder;
