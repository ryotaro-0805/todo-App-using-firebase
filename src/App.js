import './App.css';
import { useState } from 'react';
import InsertTodo from './components/InsertTodo';
import SeeTodo from './components/SeeTodo';
import Footer from './Footer';
import img from './img/pic1.jpg'

function App() {
  const [switchButton, setSwitchButton] = useState('start');

  const clickFnc = (clicked) => {
    clicked === 'insert' && setSwitchButton('insert');
    clicked === 'see' && setSwitchButton('see');
  }

  return (
    <div className="App">
      <div className='mainWrapper_div'>
        <h2 className='wrapper'><span style={{marginRight:'10px'}} class="material-symbols-outlined">
draw
</span>ToDoアプリ</h2>
        <p style={{ margin: '0', color: 'purple' }}>-using Firebase-Firestore-</p>
        <p style={{ margin: '0 0 50px 0', color: 'purple' }}>made by Ryotaro.</p>
        <img className='top_img' src={img} alt="" srcset="" />
        <div className="container">
          {switchButton === 'start' && <h3>トップページ</h3>}
          {switchButton === 'start' && <button onClick={() => clickFnc('insert')}>予定を入力する</button>}
          {switchButton === 'start' && <button onClick={() => clickFnc('see')}>予定を見る</button>}
          {switchButton === 'insert' && <InsertTodo appSwitch={setSwitchButton} />}
          {switchButton === 'see' && <SeeTodo appSwitch={setSwitchButton} />}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
