import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

// import InsertTodo from './InsertTodo';

const Revise = ({ setSwitcher, sendData }) => {
    const [reveseWord, setReviseWord] = useState(sendData.data().todo);
    // console.table(sendData.data().todo);
    const [switchButton2, setSwitchButton2] = useState('start');

    const changeData = async (e) => {
        e.preventDefault();
        setSwitchButton2('revise');
        const changeData = doc(db, 'posts', sendData.id);
        await updateDoc(changeData, {
            todo: reveseWord
        });
    }

    const html = [
        <div key={'html'}>
            <form onSubmit={changeData}>
                {/* <input onChange={(e)=>console.log(e.target.value)} value={reveseWord} /> */}
                <input onChange={(e) => {
                    setReviseWord([e.target.value]);
                }
                } value={reveseWord} />
                <input type="submit" value="変更する" />
            </form>
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    ]

    const html2 = [
        <div key={'html2'}>
            <p>変更しました。</p>
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    ]

    return (
        <div>
            {switchButton2 === 'start' && html}
            {switchButton2 === 'revise' && html2}
        </div>
    )
}

export default Revise