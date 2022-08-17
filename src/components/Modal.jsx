import React from 'react'

function Modal({ modal, setModal }) {
    return (
        <div className='Modal_container'>
            <div className='Modal'>

                <h3>Savollar bormi?<img src='./Close.svg' className='close' onClick={() => {
                    setModal(!modal)
                }} /></h3>
                <p>So'rovni qoldiring yoki hoziroq qo'ng'iroq qiling.</p>
                <div className='Modal_content'>
                    <form>
                        <input type="input" placeholder='Ismingiz' />
                        <input type="input" placeholder='Telefon raqamingiz' />
                        <button>Yuborish</button>
                    </form>
                    <div className='Modal_contact'>
                        <div>
                            <h3>Telefon</h3>
                            <p>+998 71 123-45-67</p>
                        </div>
                        <div>
                            <h3>Email</h3>
                            <p>info@egarson.uz</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal