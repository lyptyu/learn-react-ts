import React, {Component} from 'react';

interface IState {
  name: string;
}
class App extends Component<any,IState> {
  state:IState = {
    name:'kerwin'
  }
  render() {
    return (
      <div>
        app-{this.state.name.substring(0,1).toUpperCase() + this.state.name.substring(1)}
        <button onClick={()=>{
          this.setState({
            name: 'xiaoming'
          })
        }}>click</button>
      </div>
    );
  }
}

export default App;
