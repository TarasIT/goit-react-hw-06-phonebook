import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ children }) => {
  return (
    <ul>
      <ContactItem />
      {children}
    </ul>
  );
};
