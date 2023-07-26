import React, { useEffect, useState } from 'react'
import "./new.scss"
import { Link, useLocation } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { addDoc, collection, collectionGroup, doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db, storage } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getStorage, ref, uploadBytesResumable, getDownloadURL, getMetadata } from "firebase/storage";
import { useNavigate } from 'react-router-dom';


const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [perc, setPerc] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;
            console.log(name);

            const storageRef = ref(storage, file.name);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    setPerc(progress)
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }))
                    });
                }
            );
        }
        file && uploadFile();
    }, [file])

    const handleInput = (e) => {
        const id = e.target.id;
        const value = e.target.value;

        setData({ ...data, [id]: value })
    }
    console.log(data);

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                timeStamp: serverTimestamp()
            });
            navigate(-1);
            console.log(res);
        }
        catch (err) {
            console.log(err);
        }
    }



    const handleAddProject = async (e) => {
        e.preventDefault();
        try {
            const prod_uid = new Date().getTime() + Math.floor(Math.random() * 1000000);
            console.log(prod_uid);
            await setDoc(doc(db, "projects", prod_uid.toString()), {
                ...data,
                timeStamp: serverTimestamp()
            });
            navigate(-1);
            console.log("success");
        }
        catch (err) {
            console.log(err);
        }
    }

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const task_uid = new Date().getTime() + Math.floor(Math.random() * 1000000);
            console.log(task_uid);
            await setDoc(doc(db, "tasks", task_uid.toString()), {
                ...data,
                timeStamp: serverTimestamp()
            });
            navigate(-1);
            console.log("success");
        }
        catch (err) {
            console.log(err);
        }
    }




    let location = useLocation();
    return (
        <div className='new'>
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        {location.pathname === "/users/new" ? <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-12.jpg"}
                            alt="no profile"
                        /> : <img src={file ? URL.createObjectURL(file) : "https://static.thenounproject.com/png/188350-200.png"}
                            alt="no profile"
                        />
                        }
                    </div>
                    <div className="right">
                        {location.pathname === "/users/new" ?
                            <form onSubmit={handleAddUser}>
                                <div className="formInput">
                                    <label htmlFor='file'>
                                        Image: <DriveFolderUploadIcon className='icon' />
                                    </label>
                                    <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                                </div>

                                {inputs.map((input) => (
                                    <div className="formInput" key={input.id}>
                                        <label>{input.label}</label>
                                        <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                    </div>
                                ))}

                                <button disabled={perc != null && perc < 100} type="submit">SEND</button>
                            </form>
                            : location.pathname === "/projects/new" ?
                                <form onSubmit={handleAddProject}>
                                    <div className="formInput">
                                        <label htmlFor='file'>
                                            Image: <DriveFolderUploadIcon className='icon' />
                                        </label>
                                        <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                                    </div>

                                    {inputs.map((input) => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                        </div>
                                    ))}

                                    <button disabled={perc != null && perc < 100} type="submit">SEND</button>
                                </form>
                                :
                                <form onSubmit={handleAddTask}>
                                    <div className="formInput">
                                        <label htmlFor='file'>
                                            Task Logo: <DriveFolderUploadIcon className='icon' />
                                        </label>
                                        <input type="file" id='file' onChange={e => setFile(e.target.files[0])} style={{ display: "none" }} />
                                    </div>

                                    {inputs.map((input) => (
                                        <div className="formInput" key={input.id}>
                                            <label>{input.label}</label>
                                            <input id={input.id} type={input.type} placeholder={input.placeholder} onChange={handleInput} />
                                        </div>
                                    ))}

                                    <button disabled={perc != null && perc < 100} type="submit">SEND</button>
                                </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;
