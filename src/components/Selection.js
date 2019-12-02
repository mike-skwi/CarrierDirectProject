import React from 'react';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accValue : 0
    }
    this.resetCounterWhenClicked = this.resetCounterWhenClicked.bind(this);
    this.wrapperFunction = this.wrapperFunction.bind(this);  
  }

    resetCounterWhenClicked(){
      this.setState({
        accValue : 0
      })
    }

    wrapperFunction(e){
      this.props.onClick(e);
      this.resetCounterWhenClicked();
    }

  render() {
    return (  
            <div id={this.props.id}>
                {this.props.passedArray.map((obj,key) => 
                    <div key={key}>
                        <span key={key} value={obj.name}
                          data={this.state.accValue}
                            // onClick={this.props.onClick}
                            onClick={this.wrapperFunction}
                            class="indivItem">
                            {obj.name}
                        </span>
                        <p style={invis}>{this.state.accValue = this.state.accValue + 1}</p>
                    </div>
          )}
            </div>
    );
    this.setState({
      accValue : 0
    })
  }
}

export default Selection;

const invis = {
  'display':'none'
}