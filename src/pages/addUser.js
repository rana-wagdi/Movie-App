import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import React, { useEffect, useState } from "react";


function AddUser(props) {
console.log(props)
const history = useHistory()

    const [userForm, setUserForm] = useState({
        username: "Rana",
        age: ""
    })
    const [userFormERR, setUserFormERR] = useState({
        usernameERR: null,
        ageERR: null
    })


    const handleFormChange = (event) => {
        console.log(event.target.id, event.target.value)
        if (event.target.id === 'username') {
            setUserForm({
                ...userForm,
                username: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                usernameERR: event.target.value.length === 0 ? 'This feild is required' : event.target.value.length < 3 ? "Min.length is 3 characters" :null
            })
        } else if (event.target.id === 'age') {
            setUserForm({
                ...userForm,
                age: event.target.value,
            })
            setUserFormERR({
                ...userFormERR,
                ageERR: event.target.value.length === 0 ? 'This feild is required' : event.target.value< 25 ? "Min age is 25 " : null
            })
        }
    }

    const handleSubmitForm = (e) => {

        e.preventDefault()
        if (
            !userFormERR.usernameERR &&
            !userFormERR.ageERR 
            
          ) {
          history.push("/")
            console.log(userForm);
          }
    }
    return (
        <form onSubmit={handleSubmitForm} >
            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    id="username"
                    aria-describedby="usernameHelp"
                    className={`form-control ${userFormERR.usernameERR ? "border-danger" : "" }`}
                    value={userForm.username}
                    onChange={handleFormChange}
                />
                <div id="usernameHelp" className="form-text text-danger">
                    {userFormERR.usernameERR}
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    type="number"
                    className="form-control"
                    id="age"
                    aria-describedby="ageHelp"
                    value={userForm.age}
                    onChange={handleFormChange}
                />
                <div id="ageHelp" className="form-text text-danger">
                    {userFormERR.ageERR}
                </div>
            </div>

            <button type="submit" className="btn btn-primary">
                Login
            </button>
        </form>
    )
}

export default AddUser;