import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
    const contacts = [];
    writeContacts(contacts);
    return contacts;
};

removeAllContacts();
