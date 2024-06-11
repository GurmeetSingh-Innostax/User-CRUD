import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormBody from './components/UserInputForm';
import UsersRecord from './components/UsersRecord';
import { useState } from 'react';
import UserInputForm from './components/UserInputForm';
function App() {
  const [formData, setFormData] = useState([]);

  const [user, setUser] = useState({
        firstName :"",
        lastName:"",
        age:0,
        hometown:""

  })
  const [index,setIndex]=useState(-1) ;

  

  return (
    // see the working in detail in last
    <div>
     <Header title="User Details"/>
     
     <UserInputForm user= {user} setUser1={setUser}  formData={formData} setFormData={setFormData} index={index} setIndex={setIndex}/>
     <UsersRecord  setUser={setUser} formData={formData } setFormData={setFormData} index={index} setIndex={setIndex}/>
    </div>
  );
}



export default App;
