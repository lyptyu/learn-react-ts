import React, {useEffect} from 'react';
import IndexRouter from "./router";
import store from "../05-redux/redux/store";

function App() {
  const [isShow,setIsShow] = React.useState(store.getState().isShow);
  useEffect(()=>{
    store.subscribe(()=>{
      console.log('xxx',store.getState())
      setIsShow(store.getState().isShow)
    })
  })
  return (
    <div>
      <IndexRouter/>
      {
        isShow && <ul>
          <li>电影</li>
          <li>影院</li>
          <li>我的</li>
        </ul>
      }
    </div>
  );
}

export default App;
