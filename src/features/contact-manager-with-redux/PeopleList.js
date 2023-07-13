import React from "react";
import {useSelector} from "react-redux";

function PeopleList(props) {
    const contacts = useSelector(state => state.contactManager.contacts);
    const listItems = contacts.map((val, index) =>
        <li key={index}>{val}</li>
    );
    return <ul>{listItems}</ul>;
}

export default PeopleList