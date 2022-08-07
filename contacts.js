const fs = require("fs/promises");
const path = require("path");
const shortid = require('shortid');

const contactsPath = path.resolve("db", "contacts.json");

async function updateContacts (contacts) {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
}

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    const result = JSON.parse(data);
    return result || null;
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find(contact => contact.id === contactId);
    return result || null;
  
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newContact = {
        id: shortid.generate(),
        name,
        email,
        phone,
    }
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
 }

async function removeContact(contactId) {
    const contacts = await listContacts();
    const idx = contacts.findIndex(contact => contact.id === contactId);
    if (idx === -1) {
        return null;
    }
    const [result] = contacts.splice(idx, 1);
    await updateContacts(contacts);
    return result;
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
