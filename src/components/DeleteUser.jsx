/*import React from 'react';
const DeleteUser = ({ formData, setFormData, ind }) => {

    return (
        <div>
            {!formData.length ? (
                <>No data</>
            ) : (
                setFormData(formData.splice(ind, 1))
            )




            }
        </div>
    );


}
export default DeleteUser;

/*'
formData.map((data,index) => {
            if (index === ind) {
              console.log('index triggered!:',ind);
              console.log("formData before delete",{...formData});
              setFormData(formData.splice(index,1));
              console.log("User Removed at index!",ind);
              console.log("formData after delete",{...formData});

            }
            return null; 
*/