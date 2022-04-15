import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BTButton from '../components/Button';
import UserData from '../components/UserData';
// import Button from 'react-bootstrap/Button'

function HomeFunctionExample() {
const params = useParams();
console.log(params)
    const [userInfo, setUserInfo] = useState({

        name: "Rana",
        position: "frontEnd",
    })


    const [userList, setUsersList] = useState(['Rana','Ahmed','Karim','Mohamed'])
    
    const changeUserName = (name) => {
        setUserInfo({
            ...userInfo,
            name,
        })
    }
    
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        console.log("DID MOUNT, Empty ARRay")
        return () => {
            //clean up method -> WILL unmount
        }
    }, [])
    useEffect(() => {
        console.log("DID MOUNT")
    }, [userInfo])
    return (
        <>
            <h1>Hello</h1>
            <ul>{
                userList.map((user, index)=> {
                    return <li key={index}> {user}</li>
                })
            }</ul>
            <UserData
                user={userInfo}
            />
            {/* {isAdmin && (
                <BTButton
                name="Change username" handleClick={() => changeUserName("Ahmed")}
            />
            )} */}
            {isAdmin ? (
                <BTButton
                    name="Change username" handleClick={() => changeUserName("Ahmed")}
                />
            ) : <h4>You don't have premission </h4>}
          

        </>
    )
}
export default HomeFunctionExample