import { useEffect, useState, useContext } from 'react';
import './App.css';
import Login from './components/Auth/login';
import Empdash from './components/Dashboard/empdash';
import Admindash from './components/Dashboard/admindash';
import { AuthContext } from './context/authcontext';
import { setstorage } from './utils/localstorage';

function App() {

  
 const [user, setUser] = useState(null);
 const [logdata, setLogdata] = useState(null);
 const  userdata = useContext(AuthContext);

 useEffect(
  () => {
    if(userdata){}
    const loggeddata = localStorage.getItem("Loggedinuser")
    if(loggeddata){ 
      const loggeddata1 = JSON.parse(loggeddata)
      setUser(loggeddata1.role)
      setLogdata(loggeddata1.data)
      }
      },[userdata]
 )

 const handleLogin = (email, password) => {
  if (email === "admin@9.com" && password === "12345678") {
    setUser("admin");
    localStorage.setItem("Loggedinuser", JSON.stringify({ role: "admin" }));
  } else if (userdata && userdata.employees) {
    const employee = userdata.employees.find((e) => email === e.email && e.password === password)
    if (employee) {
      setUser("employee");
      setLogdata(employee)
      localStorage.setItem("Loggedinuser", JSON.stringify({ role: "employee", data: employee }));
    } 
    
  } else {
    alert("Invalid Credentials");
  }
};


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : null}
      {user === "employee" && <Empdash Logdata={logdata} changeuser={setUser} />}
      {user === "admin" && <Admindash changeuser={setUser}/>}
    </>
  );
}

export default App;


