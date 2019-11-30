import React from 'react';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  
    }


  render() {
    return (
            <div id={this.props.id}>
                {this.props.passedArray.map((obj,key) => 
                    <div key={key.toString()}>
                        <span value={obj.name} 
                            onClick={this.props.onClick} 
                            class="indivItem">
                            {obj.name}
                        </span>
                    </div>
          )}
            </div>
    );
  }
}

export default Selection;
