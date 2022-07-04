import React from 'react';

function App() {
  const [name, setName] = React.useState<string>('kerwin');
  return (
    <div>
      app - {name.substring(0,1).toUpperCase() + name.substring(1)}
      <button onClick={()=>{
        setName('xiaoming')
      }}>click</button>
    </div>
  );
}

export default App;
