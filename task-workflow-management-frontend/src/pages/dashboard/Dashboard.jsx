import { useEffect, useState } from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "./dashboard.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widgets from '../../components/widgets/Widgets';
import { db } from "../../firebase";
import { collection, getDocs, doc, deleteDoc, onSnapshot } from "firebase/firestore";

const Home = () => {
    var dataElement = "";
    const [data, setData] = useState([]);

    useEffect(() => {

        const unsubProjects = onSnapshot(collection(db, "projects"), (snapShot) => {
            let list = [];
            snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setData(list);
            // console.log("Current data: ", doc.data());

        }, (error) => {
            console.log(error);
        });

        return () => {
            unsubProjects();
        }

    }, []);
    console.log(data);
    // console.log(typeof (data));
    // console.log(Object.values(data)[0])


    return (
        <div className='dashboard'>
            <Sidebar />
            <div className="dashboardContainer">
                <Navbar />
                <div className="widgets">
                    {data.map(d => <Widgets type={"project_card"} projectData={d.projectname} key={d.id} />)}
                </div>
            </div>
        </div>
    )
}

export default Home

