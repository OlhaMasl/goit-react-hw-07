import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilter } from "../../redux/filtersSlice";

const ContactList = () => {

    const contacts = useSelector(selectContacts);

    const selectNameFilter = useSelector(selectFilter);

    const filteredContacts = contacts.filter(item => item.name.toLowerCase().includes(selectNameFilter.toLowerCase()));

    return (
        <ul className={s.listWrapper }>
            {filteredContacts.map((contact) => (<li className={s.contactItem } key={contact.id}>
                <Contact data={contact}  />
            </li>))}
        </ul>
    );
};

export default ContactList;