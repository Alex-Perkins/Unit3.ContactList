import { useState, useEffect } from "react"
import ContactList from "./ContactList"
import ContactRow from "./ContactRow"

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null);
    useEffect ( () => {
        async function functionAPI () {
        const API_URL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
        const fetchAPI = await fetch (API_URL);
        const jsonAPI =  await fetchAPI.json();
        setContact(jsonAPI);
        }
        functionAPI();
    }, []);

    return (

        <div>
        {contact ? 
        <>
         <p> {contact.name} </p>
         <p> {contact.email} </p>
         <p> {contact.phone} </p>
         </>
         :
         <p> No Contact Data </p>
    }
        </div>

    );
}