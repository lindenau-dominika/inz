import '../styles/sidenav.css'
import {Link} from 'react-router-dom'


export const Sidenav = () =>
{
    return (

        <div class='sidenav'>
                <Link to="/"> Home </Link>
                <Link to="/demo"> 2D Replays </Link>
                <Link to="/stats"> Stats </Link>
                <Link to="/"> jeszcze </Link>
        </div>
    )
}