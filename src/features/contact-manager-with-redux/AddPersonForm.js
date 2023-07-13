import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPerson} from "./ContactManagerSlice";

function AddPersonForm(props) {
    const dispatch = useDispatch()
    const [person, setPerson] = useState('');

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if(person !== '') {
            dispatch(addPerson(person));
            setPerson('');
        }
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Add new contact"
                   onChange={handleChange}
                   value={person} />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddPersonForm