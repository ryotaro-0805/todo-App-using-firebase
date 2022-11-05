import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { deleteDoc, deleteField, doc, Firestore, getFirestore, updateDoc } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";


const SeeTodo = ({ appSwitch }) => {

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

    const [inData, setInData] = useState([]);

    const getData = async () => {
        setInData([]);
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => {
            console.log(doc.id);
            setInData((data) => [...data, doc.data().todo]);
        });
    }

    useEffect(() => {
        getData();
    }, []);

    const returnFnc = () => {
        appSwitch('start');
    }

    const clickFnk = async (data) => {
        console.log(data);
        const deleted = doc(db, 'posts', '7OwrqyFVAckN65eq1XuQ');
        await updateDoc(deleted,{
            todo:deleteField()
        });
    }

    return (
        <div>
            <h3>登録されているToDoリストを表示しています</h3>
            {inData.map((data, index) => (
                <div className='wrapper_div' key={index}>
                    <div className="forCss_div">
                        <p onClick={() => { clickFnk(data) }} className='text_p'>{data}</p>
                    </div>
                </div>
            ))}
            <button onClick={returnFnc}>戻る</button>
        </div>
    )
}

export default SeeTodo