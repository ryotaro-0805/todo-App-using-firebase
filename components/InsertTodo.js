import React, { useEffect, useRef, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

const InsertTodo = ({appSwitch}) => {

  const [switchButton, setSwitchButton] = useState('start');

  const firebaseConfig = {
    apiKey: "AIzaSyCQtEPGaDk4kyqCns4qRfzxqUpyipYdbM0",
    authDomain: "fir-react-app-e6347.firebaseapp.com",
    projectId: "fir-react-app-e6347",
    storageBucket: "fir-react-app-e6347.appspot.com",
    messagingSenderId: "787708451380",
    appId: "1:787708451380:web:640a5b5fbecadf8ca50861"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const dataPush = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        todo: data
      });
      console.log('登録しました。');
      setSwitchButton('save');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const ref = useRef();
  // const [todo, setTodo] = useState();

  const getData = (e) => {
    e.preventDefault();
    // setTodo(ref.current.value);
    dataPush(ref.current.value);
    // console.log(todo);
  }
  
  const returnFnc=()=>{
    appSwitch('start');
    setSwitchButton('start');
  }

  const html = [
    <div key={'html'}>
    <form onSubmit={getData} action="">
      ToDoを入力してください
      <input ref={ref} type="text" />
    </form>
    <button onClick={returnFnc}>戻る</button>
    </div>
    ]


  return (
    <div>
      {switchButton === 'start' && html}
      {switchButton === 'save' && <p>登録しました</p>}
      {switchButton === 'save' && <button onClick={returnFnc}>戻る</button>}
    </div>
  )
}

export default InsertTodo