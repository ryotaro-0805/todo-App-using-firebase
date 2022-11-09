import React, { useState } from 'react'

const Done = ({sendData ,setSwitcher}) => {
    const [switching, setSwitching] = useState('start');


    console.log(sendData.data().innerHTML)
    
    // データー削除関数
    // const clickFnc = async (sendData) => {
    //     await deleteDoc(doc(db, 'posts', sendData.id));
    //     setSwitching('daneHtml');
    // };

    // const startHtml = [
    //     <div>
    //         <p>『{sendData.data().todo}』を削除してよろしいでしょうか？</p>
    //         <button onClick={() => clickFnc(sendData)}>決定</button>
    //     </div>
    // ]
    // const daneHtml = [
    //     <div>
    //         <p>削除しました。</p>
    //     </div>
    // ]

    return (
        <div>
            {/* {switching === 'start' && startHtml} */}
            {/* {switching === 'daneHtml' && daneHtml} */}
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    )
}

export default Done