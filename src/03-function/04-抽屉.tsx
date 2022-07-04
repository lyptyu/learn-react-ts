import React from 'react';

function App() {
  const [isShow, setIsShow] = React.useState<boolean>(true);
  return (
    <div>
      <Navbar cb={()=>{
        console.log('111')
        setIsShow(!isShow)
      }}/>
      {isShow && <Sidebar/>}
    </div>
  );
}
interface IProps {
  title?: string;
  cb: () => void;
}
function Navbar (props:IProps) {
  return <div>
    navbar - <button onClick={()=>props.cb()}>click</button>
  </div>
}
function Sidebar () {
  return <div>
    sidebar
  </div>
}
export default App;
