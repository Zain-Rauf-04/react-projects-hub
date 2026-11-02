import { PenLine, X, User, Mail, Phone, Save } from 'lucide-react'
import { useState } from 'react'
import './Edit-Contact.css'

export default function EditContact({ onClose, contacts, Index, setContacts }) {
    let filterContact = contacts.find(
        (contact, index) => index === Index
    );

    let [formData, setFormData] = useState({
        name: filterContact?.name || "",
        mail: filterContact?.mail || "",
        phone: filterContact?.phone || "",
        category: filterContact?.category || "Other"
    });
    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;
        setFormData((currData) => {
            currData[fieldName] = newValue;
            return { ...currData }
        })
    }
    let handleClick = (clickVal) => {
        setFormData((currData) => ({
            ...currData,
            category: clickVal
        }));
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", formData);
        setContacts((prevContacts) =>
            prevContacts.map((contact, index) =>
                index === Index ? { ...contact, ...formData } : contact
            )
        )
        setFormData({
            name: formData.name,
            mail: formData.mail,
            phone: formData.phone,
            category: formData.category
        })
        onClose();
    }
    return (
        <>
            {filterContact && (
                <div className="edit-form">
                    <div className="edit-main-form">
                        <div className="edit-form-header">
                            <div className="edit-form-header-left">
                                <PenLine className='form-user-icon' size={20} />
                                <h3>Edit Contact</h3>
                            </div>
                            <button onClick={onClose}><X className='form-close-icon' size={20} /></button>
                        </div>
                        <form className="edit-form-body" onSubmit={handleSubmit}>
                            <label htmlFor="name">FULL NAME <span className='required'>&#42;</span></label>
                            <User size={16} /><input type="text" id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='e.g. Jane Doe' required />
                            <label htmlFor="mail">EMAIL ADDRESS <span className='required'>&#42;</span></label>
                            <Mail size={16} /><input type="email" id='mail' name='mail' value={formData.mail} onChange={handleInputChange} placeholder='e.g. jane@example.com' required />
                            <label htmlFor="phone">PHONE NUMBER</label>
                            <Phone size={16} /><input type="tel" id='phone' name='phone' value={formData.phone} onChange={handleInputChange} placeholder='e.g. +1 (555) 000-0000' />
                            <label>CATEGORY</label>
                            <div className="edit-category-btns">
                                <button className={formData.category == "Personal" ? "active" : "category-btn"} onClick={() => handleClick("Personal")} type='button'>Personal</button>
                                <button className={formData.category == "Work" ? "active" : "category-btn"} onClick={() => handleClick("Work")} type='button'>Work</button>
                                <button className={formData.category == "Family" ? "active" : "category-btn"} onClick={() => handleClick("Family")} type='button'>Family</button>
                                <button className={formData.category == "Tech" ? "active" : "category-btn"} onClick={() => handleClick("Tech")} type='button'>Tech</button>
                                <button className={formData.category == "Other" ? "active" : "category-btn"} onClick={() => handleClick("Other")} type='button'>Other</button>
                            </div>
                            <div className="edit-form-footer">
                                <button onClick={onClose} type='button'>Cancel</button>
                                <div className="edit-form-save">
                                    <button type='submit'><Save size={16} /> Update Contact</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    )
}