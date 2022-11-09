import React, { useRef, useState } from 'react'
import { collection, addDoc} from "firebase/firestore";
import {db} from '../firebase'; 

const InsertTodo = ({ appSwitch }) => {

  const [switchButton, setSwitchButton] = useState('start');

  const dataPush = async (data, date) => {
    try {
      await addDoc(collection(db, "posts"), {
        todo: data,
        timeStamp: date
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
    console.log(dateTime);
    // const getYears = dateTime.getFullYear();
    // const getMonse = dateTime.getMonth();
    // const getDate = dateTime.getDate();
    // const getHourse = dateTime.getHours();
    // const getMiutes = dateTime.getMinutes();
    // const getSeconds = dateTime.getSeconds();
    return new Promise((resolve, reject) => {
      resolve(dateTime);
    });
  }
  const getData = async (e) => {
    e.preventDefault();
    const registeDate = await getDate();
    dataPush(ref.current.value, registeDate);

  }

  const returnFnc = () => {
    appSwitch('start');
    setSwitchButton('start');
  }

  const html = [
    <div key={'html'}>
      <form onSubmit={getData}>
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