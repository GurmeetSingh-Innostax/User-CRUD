import React, { useState } from "react";
import "./styleForm.css";
const FormBody = ({
  user,
  setUser1,
  formData,
  setFormData,
  index,
  setIndex,
}) => {
  const handleFormSubmit = (e) => {
    console.log(formData);
    e.preventDefault();

    if (index == -1) {
      console.log("Appended User", user);
      setFormData([...formData, user]);
    } else {
      console.log("specified  user ", user, "with Index: ", index);

      formData[index] = user;
      setFormData([...formData]);
      setIndex(-1);
    }

    setUser1({
      firstName: "",
      lastName: "",
      age: 0,
      homeTown: "",
    });
  };

  

  return (
    <div>
      <form className="form-card" onSubmit={handleFormSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={(e) => setUser1({ ...user, firstName: e.target.value })}
        />
        <br />
        <br />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={(e) => setUser1({ ...user, lastName: e.target.value })}
        />
        <br />
        <br />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={user.age}
          onChange={(e) => setUser1({ ...user, age: e.target.value })}
        />
        <br />
        <br />

        <label htmlFor="hometown">Hometown:</label>
        <input
          type="text"
          id="hometown"
          name="hometown"
          onChange={(e) => setUser1({ ...user, homeTown: e.target.value })}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default FormBody;
