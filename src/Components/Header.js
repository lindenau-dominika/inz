import '../styles/header.css'
import LogoImage from '../images/logo.png'
import AvatarImage from '../images/najs.jpg'

const user = {
  username: 'Kox21367'
}

export const Header = (props) =>
{
    return (
        <header>
          <div class='logo'>
            <img src={LogoImage}  alt="Logo of omega" />
          </div>
            <input placeholder='Compare with others'></input>
          <div class='profile'>
            <img class='avatar' src={AvatarImage} alt="your avatar" />
            <h3>{user.username}</h3>
          </div>
        </header>
    )
}