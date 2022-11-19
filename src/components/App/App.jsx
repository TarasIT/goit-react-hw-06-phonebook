import { useSelector } from 'react-redux';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { getContacts, getContactsFilter } from 'redux/selectors';
import { Contacts, Container, NoContactsMessage, Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getContactsFilter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(contactsFilter.toLowerCase())
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Contacts>Contacts</Contacts>
      {contacts.length !== 0 ? (
        <>
          <Filter />
          {filteredContacts.length !== 0 ? (
            <ContactList />
          ) : (
            <NoContactsMessage>No matches found</NoContactsMessage>
          )}
        </>
      ) : (
        <NoContactsMessage>
          There are no contacts yet. Please fill the form to add a new one!
        </NoContactsMessage>
      )}
    </Container>
  );
};
