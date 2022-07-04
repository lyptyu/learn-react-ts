import React, {useRef} from 'react';

function App() {
  const mytext = useRef<HTMLInputElement>(null)
  const [list, setList] = React.useState<string[]>([]);
  return (
    <div>
      <input ref={mytext}/>
      <button onClick={()=>{
        console.log(mytext.current!.value)
        setList([...list,mytext.current!.value])
      }}>click</button>
      {
        list.map(item=><li key={item}>{item}</li>)
      }
    </div>
  );
}

export default App;
