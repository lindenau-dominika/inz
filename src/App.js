import './App.css';
import {LoginForm} from './Components/LoginForm';
import './styles/Login_form.css';
import {Demo} from './pages/Demo'
import {Home} from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import {Navbar} from './Components/NavBar'
import {Stats} from './pages/Stats'
// import { Navbar } from './Components/NavBar';


function App() {

  // fetch("http://localhost:3002/users")
  // .then((res) => res.json())
  // .then((data) => {
  // return data[0].username, data[0].password
  // })

    return <div>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginForm />}/>
          <Route path="/" element={<Home />} />
          <Route path='/demo' element={<Demo />}/>
          <Route path='/stats' element={<Stats />}/>
          <Route path='*' element={<h1>PAGE NOT FOUND</h1>}/>
        </Routes>
      </Router>
    </div>
      };
export default App;
