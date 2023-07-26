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



function NewTask() {
    return (
        <div>

        </div>
    )
}

export default NewTask
