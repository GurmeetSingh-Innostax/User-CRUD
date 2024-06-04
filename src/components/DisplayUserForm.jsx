import React, { useState } from 'react';
import "./stylelist.css";
const DisplayUserForm = ({ setUser, formData, setFormData , index, setIndex}) => {
    const [updatingIndex, setUpdatingIndex] = useState(-1);

    // const [user, setUser] = useState(
    //     {
    //         firstName: "",
    //         lastName: "",
    //         age: 0,
    //         hometown: ""
    //     }
    // )

    const deleteUser = (ind) => {
        //console.log(ind,formData.splice(ind, 1));
        formData.splice(ind, 1)
        setFormData([...formData])


    }

    const updateUser = (userObject,index) => {
        setUser({ ...userObject });
        setIndex(index);
      //  deleteUser(index);

    }
    const handleUpdateForm = (event) => {
        event.preventDefault();
        // setUser(user);
        // setUpdatingIndex(-1);
    };
    return (
        <div>
            {!formData.length ? <>User List is Empty</> :
                formData.map((data, index) => (
                    <ul className="list-card"> <br />
                        <li>First Name: {data.firstName}</li>
                        <li>Last Name: {data.lastName}</li>
                        <li>Age: {data.age}</li>
                        <li>Hometown: {data.homeTown}</li>
                        <br></br>
                        <button type="button" onClick={() => updateUser(data, index)}>Update</button>
                        <button type="button" onClick={() => deleteUser(index)}>Delete</button>
                    </ul>
                ))
            }
        </div>
    );
}
export default DisplayUserForm;