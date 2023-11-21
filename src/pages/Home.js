import {Sidenav} from '../Components/SideNav'
import { Header } from '../Components/Header'
import { Cards } from '../Components/Collage';
import 'react-multi-carousel/lib/styles.css';
import '../App.css'
import '../styles/home.css'
import LineChart from '../Components/LineChart';
import { useState } from 'react'
import {UserData} from '../Data'
import { Display } from '../Components/Display';



export const Home = () => {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: 'Winrate',
            data: UserData.map((data) => data.winrate),
        },
        {
            label: 'KD Ratio',
            data: UserData.map((data) => data.kd),
        }]  
    })


    return (
        <body>
            <div>
                <h3>Recently played</h3>
            <Cards/>
            </div>
            <div>
                <Header />
                <Sidenav />
                <div class='chart-container'>
                <LineChart chartData={userData}/>
                <LineChart chartData={userData}/>
                <LineChart chartData={userData}/>
                </div>
            </div>

        </body>
    )
}
