import { useSelector, useDispatch } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { getContacts, getContactsFilter } from 'redux/selectors';

export const ContactList = ({ children }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getContactsFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(contactsFilter)
  );

  return (
    <ul>
      {filteredContacts.map(({ name, id, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            id={id}
            number={number}
            dispatch={dispatch}
          />
        );
      })}
      {children}
    </ul>
  );
};
