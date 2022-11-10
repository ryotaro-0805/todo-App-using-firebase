import React from 'react'
import { useState } from 'react'
// import InsertTodo from './InsertTodo';

const Revise = ({ setSwitcher, sendData }) => {
    const [reveseWord, setReviseWord] = useState(sendData.data().todo);
    // console.table(sendData.data().todo);
    const [switchButton2, setSwitchButton2] = useState('start');

    const changeData = (e) => {
        e.preventDefault();
        // setSwitchButton2('revese');
        console.log(sendData.id);
    }

    const html = [
        <div key={'html'}>
            <form onSubmit={changeData}>
                {/* <input onChange={(e)=>console.log(e.target.value)} value={reveseWord} /> */}
                <input onChange={(e) => {
                    setReviseWord([e.target.value]);
                    console.log(e.target.value)
                }
                } value={reveseWord} />
            <button type='submit'>変更する</button>
            </form>
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    ]


    return (
        <div>
            {switchButton2==='start' && html}
            {/* {switchButton2==='revise' && <InsertTodo />} */}
        </div>
    )
}

export default Revise