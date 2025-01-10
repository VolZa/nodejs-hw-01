import { PATH_DB } from '../constants/contacts.js';
import fs  from 'fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
        return updatedContacts;
    } catch (error) {
        console.error('Error writing contacts:', error);
        throw error;
    }    
};

export default writeContacts;