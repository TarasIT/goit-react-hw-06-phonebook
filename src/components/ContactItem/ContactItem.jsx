import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';
import { getContacts, getContactsFilter } from 'redux/selectors';
import { Contact, ContactsDeleteBtn, Item } from './ContactItem.styled';

export const ContactItem = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getContactsFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(contactsFilter)
  );

  return filteredContacts.map(({ name, id, number }) => {
    return (
      <Item key={id}>
        <Contact>
          {name}: {number}
        </Contact>
        <ContactsDeleteBtn
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
            dispatch(filterContacts(''));
          }}
        >
          Delete
        </ContactsDeleteBtn>
      </Item>
    );
  });
};
