import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";
import { useEffect } from "react";
import { fetchContactsThunk } from "../../redux/contactsOps";

const ContactList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContactsThunk())
    }, [dispatch]);

    const contacts = useSelector(selectContacts);

    const selectNameFilter = useSelector(selectFilter);

    const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()));

    return (
        <ul className={s.listWrapper }>
            {filteredContacts.length > 0 ? (filteredContacts.map((contact) => (<li className={s.contactItem } key={contact.id}>
                <Contact data={contact}  />
            </li>))) : (<h2>No data received!...</h2>)}
        </ul>
    );
};

export default ContactList;