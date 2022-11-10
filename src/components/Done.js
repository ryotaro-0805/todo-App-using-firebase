import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';

const Done = ({ sendData, setSwitcher }) => {
    const updateFnc = async (sendData) => {
        if (sendData.data().check === 'done') {
            const changeData = doc(db, 'posts', sendData.id);
            await updateDoc(changeData, {
                check: 'yet'
            });
        } else {
            const changeData = doc(db, 'posts', sendData.id);
            await updateDoc(changeData, {
                check: 'done'
            });
        }
    }

    updateFnc(sendData);

    return (
        <div>
            <p>変更しました。</p>
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    )
}

export default Done