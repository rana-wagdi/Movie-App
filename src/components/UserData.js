function UserData(props) {
    console.log(props)
        return (
            <>
    
                <p>Username:{props.user.name}</p>
                <p>Position:{props.user.position} </p>
                <button>Save</button>
            </>
        )
    
    }
    export default UserData;