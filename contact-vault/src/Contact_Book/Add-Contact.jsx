import { UserPlus, X, User, Mail, Phone, Save } from 'lucide-react'
import { useState } from 'react'
import './Add-Contact.css'

export default function AddContact({ onClose, setContacts }) {
    let [category, setCategory] = useState("Other")
    let [formData, setFormData] = useState({
        name: '',
        mail: '',
        phone: '',
        category: 'Other'
    })
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
        setCategory(clickVal)
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted:", formData);
        setContacts((prevContacts) => [
            ...prevContacts, { ...formData }
        ])
        setFormData({
            name: '',
            mail: '',
            phone: '',
            category: ''
        })
        onClose();
    }
    return (
        <div className="contact-form">
            <div className="main-form">
                <div className="form-header">
                    <div className="form-header-left">
                        <UserPlus className='form-user-icon' size={20} />
                        <h3>Add New Contact</h3>
                    </div>
                    <button onClick={onClose}><X className='form-close-icon' size={20} /></button>
                </div>
                <form className="form-body" onSubmit={handleSubmit}>
                    <label htmlFor="name">FULL NAME <span className='required'>&#42;</span></label>
                    <User size={16} /><input type="text" id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='e.g. Jane Doe' required />
                    <label htmlFor="mail">EMAIL ADDRESS <span className='required'>&#42;</span></label>
                    <Mail size={16} /><input type="email" id='mail' name='mail' value={formData.mail} onChange={handleInputChange} placeholder='e.g. jane@example.com' required />
                    <label htmlFor="phone">PHONE NUMBER</label>
                    <Phone size={16} /><input type="tel" id='phone' name='phone' value={formData.phone} onChange={handleInputChange} placeholder='e.g. +1 (555) 000-0000' />
                    <label>CATEGORY</label>
                    <div className="category-btns">
                        <button className={category == "Personal" ? "active" : "wow"} onClick={() => handleClick("Personal")} type='button'>Personal</button>
                        <button className={category == "Work" ? "active" : "wow"} onClick={() => handleClick("Work")} type='button'>Work</button>
                        <button className={category == "Family" ? "active" : "wow"} onClick={() => handleClick("Family")} type='button'>Family</button>
                        <button className={category == "Tech" ? "active" : "wow"} onClick={() => handleClick("Tech")} type='button'>Tech</button>
                        <button className={category == "Other" ? "active" : "wow"} onClick={() => handleClick("Other")} type='button'>Other</button>
                    </div>
                    <div className="form-footer">
                        <button onClick={onClose} type='button'>Cancel</button>
                        <div className="form-save">
                            <button type='submit'><Save size={16} /> Save Contact</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}