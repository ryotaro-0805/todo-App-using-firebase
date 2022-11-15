import React, { useRef, useState } from 'react'
import { collection, addDoc} from "firebase/firestore";
import {db} from '../firebase'; 

const InsertTodo = ({ appSwitch }) => {

  const [switchButton, setSwitchButton] = useState('start');
  const [errorCon,setErrorCon]= useState('');

  const dataPush = async (data, date) => {
    try {
      await addDoc(collection(db, "posts"), {
        todo: data,
        timeStamp: date,
        check:'yet'
      });
      setSwitchButton('save');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const ref = useRef();

  // 日付を取得
  const getDate = () => {
    // const docRef = doc(db);
    // const updateTimestamp = await updateDoc(docRef, {
    //     timestamp: serverTimestamp()
    // });
    // console.log(updateTimestamp);
    const dateTime = new Date();
    // const getYears = dateTime.getFullYear();
    // const getMonse = dateTime.getMonth();
    // const getDate = dateTime.getDate();
    // const getHourse = dateTime.getHours();
    // const getMiutes = dateTime.getMinutes();
    // const getSeconds = dateTime.getSeconds();
    return new Promise((resolve, reject) => {
      const sendDate=dateTime.getFullYear()+'.'+dateTime.getMonth()+'.'+dateTime.getDate();
      resolve(dateTime,sendDate);
    });
  }
  const getData = async (e) => {
    e.preventDefault();
    if (ref.current.value.length>10){
      setErrorCon('error');
      console.log('error');
    } else {
      const registeDate = await getDate();
      dataPush(ref.current.value, registeDate);
      setErrorCon('');
    }
  }


  const returnFnc = () => {
    appSwitch('start');
    setSwitchButton('start');
  }

  const html = [
    <div key={'html'}>
      {errorCon === 'error' && <p>※予定は10文字以内で入力してください！</p>}
      <form onSubmit={getData}>
      {errorCon === '' && <p>ToDoを入力してください(10文字以内)</p>}  
      {errorCon === 'error' && <p>ToDoを入力してください</p>}
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