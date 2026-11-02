import { X, ShieldAlert } from 'lucide-react'
import './Delete-Contact.css'

export default function DeleteContact({ onClose, contacts, Index, setContacts }) {
    let handleDelete = () => {
        console.log("Deleted")
        setContacts((prevContacts) => (
            prevContacts.filter(
                (contact, index) => index !== Index)
        ))
    }
    return (
        <div className="delete-contact">
            <div className="delete-alert">
                <div className="delete-header">
                    <span><ShieldAlert size={20} /></span>
                    <h3>Delete Contact</h3>
                </div>
                <div className="delete-body">
                    <p>Are you sure you want to delete this contact? This action will remove the record from your local storage.</p>
                </div>
                <div className="delete-footer">
                    <button onClick={onClose}>Cancel</button>
                    <button onClick={() => {
                        handleDelete();
                        onClose();
                    }}>Yes, Delete Contact</button>
                </div>
            </div>
        </div>
    )
}