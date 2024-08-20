import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid"
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {

    const dispatch = useDispatch();

    const contactValidation = Yup.object({
        name: Yup.string().required("Required").min(3, "Too short").max(50, "Too long"),
        number: Yup.string().required("Required").min(3, "Too short").max(50, "Too long")
    });

    const initialValues = {
        name: "",
        number: "",
    };

    const handleSubmit = (data, actions) => {

        const newContact = {
            id: nanoid(),
            name: data.name,
            number: data.number,
        };
        dispatch(addContact(newContact))
    
        actions.resetForm();
    };

    return (
        <div>
            <Formik validationSchema={contactValidation} initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={s.form}>
                    <label className={s.dataFielf}>
                        <span>Name</span>
                        <Field type="text" name="name"></Field>
                        <ErrorMessage name="name" component="span" className={s.errorMessages } />
                    </label>
                    <label className={s.dataFielf}>
                        <span>Number</span>
                        <Field type="text" name="number"></Field>
                        <ErrorMessage name="number" component="span" className={s.errorMessages } />
                    </label>
                    <button type="submit" className={ s.addContactBtn}>Add contact</button>
                </Form>
            </Formik>
        </div>

    );
};
 
export default ContactForm;