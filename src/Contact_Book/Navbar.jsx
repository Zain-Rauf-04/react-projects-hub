import './Navbar.css'
import user from './assets/user.svg'
import AddContact from "./Add-Contact"
import {useState} from 'react'

export default function Navbar ({setContacts}) {
    let [isPanelOpen, setIsPanelOpen] =useState(false)

    return (
        <div className='nav'>
            <div className="nav-content">
                <a href="#"><img src={user} alt="User"></img></a>
                <div className="nav-content-header">
                    <strong>ContactBook</strong>
                    <span>React Practice</span>
                    <p>Manage your personal and professional directory seamlessly</p>
                </div>
            </div>
            <div className="nav-buttons">
                <button><i class="fa-solid fa-code"></i>Practice Breakdown</button>
                <button onClick={() => setIsPanelOpen(true)}><i class="fa-solid fa-user-plus"></i>Add Contact</button>
            </div>
            {isPanelOpen && <AddContact setContacts={setContacts} onClose={() => setIsPanelOpen(false)} />}
        </div>
    )
}
