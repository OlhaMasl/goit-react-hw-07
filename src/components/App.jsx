
import "../index.css";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../redux/contactsSlice";

const App = () => {

  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

    return (
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        {isLoading && <h1 className="loading">Loading...</h1>}
        {isError && <h2 className="error">Oops, something went wrong...</h2>}

    </div>
  );
};

export default App;

