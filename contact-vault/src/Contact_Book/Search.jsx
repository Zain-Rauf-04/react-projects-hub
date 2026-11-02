import { use, useState } from 'react'
import './Search.css'
import { Contact } from 'lucide-react';

export default function Search({contacts, filter, setFilter, setSearchContact, setSearchInput}) {
    let [query, setQuery] = useState("");
    let handleClick = (value) => {
        setFilter(value)
    }
    let handleChange = (event) => {
        let inputChg = event.target.value;
        setQuery(inputChg)
        setSearchInput(inputChg)
        let queryContact = contacts.filter((contact) => (
            `${contact.name}${contact.mail}`.toLowerCase().includes(inputChg.trim().toLowerCase())
        ))
        setSearchContact(queryContact)
    }
    return (
        <div className="search">
            <div className="input">
                <i class="fa-brands fa-sistrix"></i>
                <input type="text" name="search" id="search" value={query} onChange={handleChange} placeholder='Search contacts by name or email...' />
                <small>Total: <span> {contacts.length} contacts</span></small>
                <i class="fa-solid fa-xmark" onClick={() => {setQuery(""); setSearchInput("")}}></i>
            </div>
            <div className="filter">
                <small>Filter: </small>
                <button className={filter === "All" ? "active-filter" : ""} onClick={()=> handleClick("All")}>All</button>
                <button className={filter === "Personal" ? "active-filter" : ""} onClick={()=> handleClick("Personal")}>Personal</button>
                <button className={filter === "Work" ? "active-filter" : ""} onClick={()=> handleClick("Work")}>Work</button>
                <button className={filter === "Family" ? "active-filter" : ""} onClick={()=> handleClick("Family")}>Family</button>
                <button className={filter === "Tech" ? "active-filter" : ""} onClick={()=> handleClick("Tech")}>Tech</button>
                <button className={filter === "Other" ? "active-filter" : ""} onClick={()=> handleClick("Other")}>Other</button>
            </div>
        </div>
    )
}