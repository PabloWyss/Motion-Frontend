const UsersSentRequest = (prop) => {

    console.log(prop.requester)

    return (
        <div>
            <img alt="avatar" src=""/>
            <div>
                <p>
                    {prop.requester.first_name} {prop.requester.last_name}
                </p>
                <p>
                    {prop.requester.location}
                </p>
            </div>
            <button></button>
            <button></button>
        </div>
    )
}

export default UsersSentRequest