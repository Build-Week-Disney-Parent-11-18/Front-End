import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


const InputField = styled.div`
    padding: 10px;
`;

const VolunteerEditTitle = styled.h1`
    background-color: #253b57;
    color: #E0E4E9;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 30px;
`;

const EditVolunteer = (props) => {

    const [credentials, setCredentials] = useState ({
        firstName: props.user.firstName,
        lastName: props.user.lastName,
        DOB: props.user.DOB,
        phoneNum: props.user.phoneNum,
        avgPerChild: props.user.avgPerChild,
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
            ...credentials,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div>
            <VolunteerEditTitle>Edit Your Account</VolunteerEditTitle>
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
                placeholder="Phone Num."
                value={credentials.phoneNum}
                onChange={handleChanges}
                />
            </InputField>
            <InputField>
                <input 
                name="avgPerChild"
                type="text"
                placeholder="Average Cost"
                value={credentials.avgPerChild}
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



export default EditVolunteer;