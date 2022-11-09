import './App.css';
import { useEffect, useState } from 'react';
import InsertTodo from './components/InsertTodo';
import SeeTodo from './components/SeeTodo';

function App() {
const [switchButton,setSwitchButton]=useState('start');

const clickFnc=(clicked)=>{
  clicked==='insert' && setSwitchButton('insert');
  clicked==='see' && setSwitchButton('see');
}

  return (
    <div className="App">
      {switchButton==='start' && <button onClick={()=>clickFnc('insert')}>Insert ToDo</button>}
      {switchButton==='start' && <button onClick={()=>clickFnc('see')}>See ToDo</button>}
      {switchButton==='insert' && <InsertTodo  appSwitch={setSwitchButton} /> }
      {switchButton==='see' && <SeeTodo appSwitch={setSwitchButton} /> }
    
    </div>
  );
}

export default App;
