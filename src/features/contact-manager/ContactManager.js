import React, {useState} from "react";
import '../contact-manager-with-redux/ContactManager.css'

function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if(person !== '') {
            props.handleSubmit(person);
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

function PeopleList(props) {
    const arr = props.data;
    const listItems = arr.map((val, index) =>
        <li key={index}>{val}</li>
    );
    return <ul>{listItems}</ul>;
}

function ContactManager(props) {
    const contacts_default = ["James Smith", "Thomas Anderson", "Bruce Wayne"]
    const [contacts, setContacts] = useState(contacts_default);

    function addPerson(name) {
        setContacts([...contacts, name]);
    }

    return (
        <div className='contactManager'>
            <h3>ContactManager</h3>
            <AddPersonForm handleSubmit={addPerson} />
            <PeopleList data={contacts} />
        </div>
    );
}

export default ContactManager