import Contact from "./ContactList";

const ContactRow = ({ setSelectedContactId, contact }) => {
  return (
    <>
      <tr
        onClick={() => {
          setSelectedContactId(Contact.id);
        }}
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    </>
  );
};

export default ContactRow;
