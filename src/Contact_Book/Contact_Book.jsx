import Navbar from "./Navbar"
import Search from "./Search"
import Cards from "./Cards"
import { useEffect, useState } from "react"
import './Contact_Book.css'

export default function ContactBook () {
    let [searchInput, setSearchInput] = useState("")
    let [searchContact, setSearchContact] = useState([])
    let [filter, setFilter] = useState("All")
    let [contacts, setContacts] = useState(()=> {
        let saved = localStorage.getItem("contacts")
        return saved ? JSON.parse(saved) : []
    })
    useEffect(()=> {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])
    return (
        <div className="container">
            <Navbar setContacts={setContacts}></Navbar>
            <div className="main">
                <Search contacts={contacts} setFilter={setFilter} filter={filter} setSearchContact={setSearchContact} setSearchInput={setSearchInput}></Search>
                {contacts && contacts.length > 0 ? (<Cards contacts={contacts} filter={filter} setContacts={setContacts} searchContact={searchContact} searchInput={searchInput}></Cards>) : (<h1 className="no-contact">No contact is listed!</h1>)}
            </div>
            <div className="sidebar"></div>
        </div>
    )
}
