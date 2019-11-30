import React from 'react';

class CupcakeReciever extends React.Component {
    componentDidMount(props) {
        // iterate through the array passed as a prop (The 3 things we're getting from the api)
        var recievedList = [];
        for (var i = 0; i < 3; i++){
            fetch("http://localhost:4000/cupcakes/" + this.props.requested[i]).
            then((Response)=>Response.json()).
            then((findresponse)=>
            {
               recievedList.push(findresponse);
            })
        }
        console.log("Whats being added: " + recievedList)
        this.setState({
            recievedItems : recievedList
        })
    }

    addToParent(){
        console.log(this.state.recievedItems);
            this.props.callbackFromParent(this.state.recievedItems);
            this.setState({
                startedButtonClicked : true
            })
        }

    constructor(props) {
    super(props);
        this.state = { 
            recievedItems : [],
            startedButtonClicked : false
        } 
        this.addToParent = this.addToParent.bind(this);
    }

  render() {
    // if (this.state.startedButtonClicked === false ){
    if (this.props.selectedAlready === false){
        return (
            <div className="CupcakeReciever">
                <button onClick={this.addToParent}>Let's get started</button>
            </div>
          );
      
    }
    else{
        return(
            <p></p>    
        );
    }
  }
}

export default CupcakeReciever;
