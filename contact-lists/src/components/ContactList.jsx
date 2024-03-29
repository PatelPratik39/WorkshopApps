import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
  { id: 4, name: "dd-90", phone: "999-999-9999", email: "ddd9@droids.com" }
];

const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts);

  //   calling useEffect Hook

  useEffect(() => {
    // to fetch the data from an api, we have to use "async()"
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://jsonplace-univclone.herokuapp.com/users"
        );
        const contactData = response.json();
        // console.log(contactData);
        setContacts(contactData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {
            // Map over data here
            contacts.map((contact) => {
              return <ContactRow key={contact.id} contact={contact} />;
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default ContactList;

