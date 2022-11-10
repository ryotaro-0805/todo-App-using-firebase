import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { query, orderBy } from "firebase/firestore";
import Revise from './Revise';
import { db } from '../firebase';
import Delete from './Delete';
import Done from './Done';

const SeeTodo = ({ appSwitch }) => {

    const [inData, setInData] = useState([]);
    const [switcher, setSwitcher] = useState('start');
    const [sendData, setSendData] = useState('');

    // firestoreからデータを取得
    const getData = async () => {
        setInData([]);
        const dbRef = collection(db, 'posts');
        const q = query(dbRef, orderBy("timeStamp", "desc"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setInData((data) => [...data, doc]);
        });
        setloading(false);
    }

    useEffect(() => {
        getData();
    }, [switcher]);

    const returnFnc = () => {
        appSwitch('start');
    }

    // ローディングアニメーション
    const [loading, setloading] = useState(true);
    const clickFnk = (data) => {
        setSwitcher('select');
        setSendData(data);
    };

    const sendInnerHtml = (html) => {
        html.target.classList.add('active');
    }

    const html = [
        <div key={'html'}>
            <h3>登録されているToDoリストを表示しています</h3>
            <hr />
            {loading && <p>LOADING NOW...</p>}
            {inData.map((data, index) => (
                <div className='wrapper_div' key={index}>
                    <div className="forCss_div">
                        {data.data().check === 'done' ?
                            <div>
                                <p onClick={(html) => { clickFnk(data); sendInnerHtml(html) }} className='text_p active'>
                                    {data.data().todo} - {String(data.data().timeStamp.toDate()).split('GMT+0900 (日本標準時)')[0]}
                                    </p>
                            </div> :
                            <div>
                                <p onClick={(html) => { clickFnk(data); sendInnerHtml(html) }} className='text_p'>
                                    {data.data().todo} - {String(data.data().timeStamp.toDate()).split('GMT+0900 (日本標準時)')[0]}
                                    </p>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    ]

    const selectHtml = [
        <div key={'selectHtml'}>
            {sendData && <h3>ToDoリスト『{sendData.data().todo}』に対しての</h3>}
            <h3>処理を選択してください。</h3>
            <button onClick={() => setSwitcher('revise')}>編集</button>
            {sendData && sendData.data().check === 'done' && <button onClick={() => setSwitcher('done')}>実行済みを取り消す</button>}
            {sendData && sendData.data().check === 'yet' && <button onClick={() => setSwitcher('done')}>実行済みにする</button>}

            <button onClick={() => setSwitcher('delete')}>削除</button>
            <button onClick={() => setSwitcher('start')}>戻る</button>
        </div>
    ]

    return (
        <div>
            {switcher === 'start' && html}
            {switcher === 'select' && selectHtml}
            {switcher === 'start' && <button onClick={returnFnc}>戻る</button>}
            {switcher === 'revise' && <Revise setSwitcher={setSwitcher} sendData={sendData} />}
            {switcher === 'delete' && <Delete setSwitcher={setSwitcher} sendData={sendData} />}
            {switcher === 'done' && <Done setSwitcher={setSwitcher} sendData={sendData} />}
        </div>
    )
}

export default SeeTodo