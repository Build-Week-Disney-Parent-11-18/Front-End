import React, {useState} from 'react'
import axios from "axios"
import styled from 'styled-components'

const InputField = styled.div`
    padding: 10px;
`;

const ParentEditTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;


const Parent = (props) => {

    const [credentials, setCredentials] = useState({
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        DOB: props.user.DOB,
        phoneNum: props.user.phoneNum,
        emergencyPhone: props.user.emergencyPhone,
        type: props.user.type
    });
    console.log(credentials)

    const handleSubmit = e => {
        e.preventDefault();
        axios
        .get()
        .then(res => {
            console.log(res.data)
            props.history.push();
        })
        .catch(err => console.log(err));
    }

    const handleChanges = event => {
        setCredentials({
            ...credentials, [event.target,name]: event.target.value
        });
    }

    return(
        <div>
            <ParentEditTitle>Edit Your Account</ParentEditTitle>
            <form onSubmit={handleSubmit}>
                <InputField>
                <input
                name="firstName"
                type="text"
                placeholder="First Name"
                value={credentials.firstName}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={credentials.lastName}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <input 
                name="email"
                type="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <input
                name="DOB"
                type="date"
                placeholder="DOB"
                value={credentials.DOB}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <input 
                name="phoneNum"
                type="text"
                placeholder="Phone Num"
                value={credentials.phoneNum}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <input
                name="emergencyPhone"
                type="text"
                placeholder="Emergencr Phone Num"
                value={credentials.emergencyPhone}
                onChange={handleChanges}
                />
                </InputField>
                <InputField>
                <button type="submit">Submit Edits</button>
                </InputField>
            </form>
        </div>
    ) 

}

export default Parent;