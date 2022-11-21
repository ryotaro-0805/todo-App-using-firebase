import React from 'react'
import { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

// import InsertTodo from './InsertTodo';

const Revise = ({ setSwitcher, sendData }) => {
    const [reveseWord, setReviseWord] = useState(sendData.data().todo);
    // console.table(sendData.data().todo);
    const [switchButton2, setSwitchButton2] = useState('start');
    const [errorCon, setErrorCon] = useState('');

    const changeData = async (e) => {
        e.preventDefault();
        console.log(reveseWord[0].length);
        if (reveseWord[0].length > 10) {
            setErrorCon('error');
        } else {
            setErrorCon('');
            setSwitchButton2('revise');
            const changeData = doc(db, 'posts', sendData.id);
            await updateDoc(changeData, {
                todo: reveseWord
            });
        }
    }

    const html = [
        <div key={'html'}>
            <form onSubmit={changeData}>
                {/* <input onChange={(e)=>console.log(e.target.value)} value={reveseWord} /> */}
                <input onChange={(e) => {
                    setReviseWord([e.target.value]);
                }
                } value={reveseWord} />
                <input className='revise_input' type="submit" value="変更する" />
            </form>
            <button className='revise_button' onClick={() => setSwitcher('start')}>戻る</button>
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
            {errorCon === 'error' && <p>※予定は10文字以内で入力してください！</p>}
            {switchButton2 === 'start' && html}
            {switchButton2 === 'revise' && html2}
        </div>
    )
}

export default Revise