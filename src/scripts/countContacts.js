import { readContacts } from '../utils/readContacts.js';
export const countContacts = async () => {
    const contakts = readContacts();
    const count = contakts
        .then(value => { return value.length }) 
        .catch(error => { console.log(error) }); 
    return count;
};

console.log(await countContacts());
