import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormBody from './components/UserFormBody';
import DisplayUserForm from './components/DisplayUserForm';
import DeleteUser from './components/DeleteUser';
import { useState } from 'react';
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
     
     <FormBody user= {user} setUser1={setUser}  formData={formData} setFormData={setFormData} index={index} setIndex={setIndex}/>
     <DisplayUserForm  setUser={setUser} formData={formData } setFormData={setFormData} index={index} setIndex={setIndex}/>
    </div>
  );
}



export default App;
