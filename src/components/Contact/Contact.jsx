import { useDispatch } from "react-redux";
import s from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data: { id, name, number } }) => {
    
     const dispatch = useDispatch();

    return (
        <div className={s.wrapper }>
            <div className={s.contactData}>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Name:</span>
                <p className={s.contactEl}>{name}</p>
            </div>
            <div className={s.contactDataItem}>
                <span className={s.icons}>Tell:</span>
                <p className={s.contactEl}>{number}</p>
                </div>
            </div>
            <button className={s.deleteBtn} onClick={()=>dispatch(deleteContact(id))} type="button">Delete</button>
        </div>
    );
};

export default Contact;