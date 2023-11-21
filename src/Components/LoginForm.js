import {Link} from 'react-router-dom'

export const LoginForm = () => {
    return (
      <div>
        {/* <section> */}
          <div class="main_container">
  
        <h1>Garnuchy</h1>
        <form method="post" class="login_container">
          <input type="text" placeholder="Username" id="usrname" name="username"></input>
          <input type="password" placeholder="Password" id="pswrd" name="password"></input>
          <input class="buttons" type="submit" id="loginButton"></input>
                <div>
                    Not registered yet? <Link to="/register">Sign up now!</Link>
                </div>
        </form>
          </div>
        </div>
    )
  }
