import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Modal from './Modal';

function Nav() {
    const [modal, setModal] = useState(false)
    return (
        <nav className='nav_All'>
            {modal ? <Modal setModal={setModal} modal={modal} /> : null}
            <img src='./all_logo.svg' alt='Logo' className='logo' />
            <div className='navbar'>
                <h5><Link to={`/`} className="router" >Asosiy</Link></h5>
                <h5><Link to={`/drivers`} className="router" >Haydovchilar uchun</Link></h5>
                <h5 className="router" >Biznes</h5>
                <select name="Lang" className='selectLang'>
                    <option value="UZ">UZ</option>
                    <option value="EN">EN</option>
                </select>
                <button className='btn_call' onClick={() => setModal(!modal)}>
                    <img src='./call_logo.svg' alt='Call Logo' />
                    <h5>Biz bilan bog’lanish</h5>
                </button>
            </div>
        </nav>
    )
}

export default Nav