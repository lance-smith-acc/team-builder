import React, {useState} from 'react';

const MemberForm = props => {

    const [teamMember, setNewMember] = useState({
        name: "",
        email: "",
        role:""
    });

    const handleChanges = e => {
    setNewMember({
        ...teamMember,
        [e.target.name]: e.target.value
    });
    console.log(e.target.value);
    };
    
    const submitForm = e => {
        e.preventDefault();
        props.setNewMember(teamMember);
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="Name">Name:</label>
                <input id="name" type="text" placeholder="name" name="name" value={teamMember.name} onChange={handleChanges}/>
                <button type="submit">Add New Member</button>
            </form>
        </div>
    )
}

export default MemberForm;