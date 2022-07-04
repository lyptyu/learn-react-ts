import React from 'react';

function App() {
  return (
    <div>
      <Child name={'aaa'}/>
    </div>
  );
}
interface IProps {
  name:string
}
// function Child(props:IProps) {
//   return <div>child-{props.name}</div>
// }

const Child:React.FC<IProps> = (props) =>{
  return <div>child-{props.name}</div>
}

export default App;
