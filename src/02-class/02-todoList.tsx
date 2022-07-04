import React, {Component} from 'react';
interface IState {
  text:string,
  list: string[]
}
class App extends Component<any,IState> {
  state = {
    text:'',
    list: []
  }
  myRef = React.createRef<HTMLInputElement>();
  render() {
    return (
      <div>
        {/*<input type={'text'} value={this.state.text} onChange={(e)=>{*/}
        {/*  this.setState({*/}
        {/*    text: e.target.value*/}
        {/*  })*/}
        {/*}}/>*/}
        <input type="text" ref={this.myRef}/>
        <button onClick={()=>{
          // console.log(this.state.text);
          console.log(this.myRef.current!.value);
          this.setState({
            list:[...this.state.list, this.myRef.current!.value]
          })
        }}>click</button>
        {
          this.state.list.map(item=><li key={item}>{item}</li>)
        }
      </div>
    );
  }
}

export default App;
