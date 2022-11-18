import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';
import { Contact, ContactsDeleteBtn, Item } from './ContactItem.styled';

export const ContactItem = ({ name, id, number, dispatch }) => {
  return (
    <Item>
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
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
