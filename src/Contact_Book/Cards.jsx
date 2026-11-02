import {PencilLine, Trash2, Mail, Phone} from 'lucide-react';
import { useState } from 'react'; 
import EditContact from './Edit-Contact';
import DeleteContact from './Delete-Contact';
import './Cards.css'

export default function Cards({contacts, filter, setContacts, searchContact, searchInput}) {
    let [selectedIndex, setSelectedIndex] = useState(null)
    let [isEditPanelOpen, setIsEditPanelOpen] = useState(false);
    let [isDeletePanelOpen, setIsDeletePanelOpen] = useState(false);
    let filterContacts = contacts.filter((contact) => {
        if (filter === "All") return true;
        return contact.category === filter;
    })
    let handleIndex = (index) => {
        setSelectedIndex(index)
    }
    return(
        <div className="cards">
            {!searchInput ? (
            filterContacts.map((contact, index) => (
                <div className="card" key={index}>
                    <div className="card-info">
                        <span>{contact.name?.slice(0, 2).toUpperCase() || "??"}</span>
                        <div className="card-details">
                            <strong>{contact.name}</strong>
                            <small><i class="fa-solid fa-tag"></i>{contact.category || "Other"}</small>
                        </div>
                        <div className="card-edit">
                            <PencilLine onClick={()=> {setIsEditPanelOpen(true); handleIndex(index)}} size={16} className='card-edit-icon'/>
                            <Trash2 onClick={()=> {setIsDeletePanelOpen(true); handleIndex(index)}} size={16} className='card-delete-icon'/>
                        </div>
                    </div>
                    <div className="card-contact">
                        <div className="card-contact1">
                            <Mail size={16}/><a href={contact.mail ? `mailto:${contact.mail}` : undefined}>{contact.mail}</a>
                        </div>
                        <div className="card-contact2">
                            <Phone size={16}/><a href={contact.phone ? `tel:${contact.phone}` : undefined} className={!contact.phone ? "tilt" : ""}>{contact.phone || "No phone number"}</a>
                        </div>
                    </div>
                </div>
            ))) : (
                searchContact.map((contact, index) => (
                <div className="card" key={index}>
                    <div className="card-info">
                        <span>{contact.name?.slice(0, 2).toUpperCase() || "??"}</span>
                        <div className="card-details">
                            <strong>{contact.name}</strong>
                            <small><i class="fa-solid fa-tag"></i>{contact.category || "Other"}</small>
                        </div>
                        <div className="card-edit">
                            <PencilLine onClick={()=> {setIsEditPanelOpen(true); handleIndex(index)}} size={16} className='card-edit-icon'/>
                            <Trash2 onClick={()=> {setIsDeletePanelOpen(true); handleIndex(index)}} size={16} className='card-delete-icon'/>
                        </div>
                    </div>
                    <div className="card-contact">
                        <div className="card-contact1">
                            <Mail size={16}/><a href={contact.mail ? `mailto:${contact.mail}` : undefined}>{contact.mail}</a>
                        </div>
                        <div className="card-contact2">
                            <Phone size={16}/><a href={contact.phone ? `tel:${contact.phone}` : undefined} className={!contact.phone ? "tilt" : ""}>{contact.phone || "No phone number"}</a>
                        </div>
                    </div>
                </div>
            ))
            )}
            {isEditPanelOpen && <EditContact onClose={()=> setIsEditPanelOpen(false)} contacts={contacts} Index={selectedIndex} setContacts={setContacts}></EditContact>}
            {isDeletePanelOpen && <DeleteContact onClose={()=> setIsDeletePanelOpen(false)} contacts={contacts} Index={selectedIndex} setContacts={setContacts}></DeleteContact>}
        </div>
    )
}