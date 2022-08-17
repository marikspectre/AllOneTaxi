import React from 'react'

function CardTwo() {
    return (
        <div className='CT_con'>
            <h2>Savollar bormi?</h2>
            <p>So'rovni qoldiring yoki hoziroq qo'ng'iroq qiling.</p>
            <div className='CT_form_con'>
                <form>
                    <select name="theme" id="theme" form="themeForm">
                        <option value="" disabled selected >Murojaat mavzusi</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input type="input" placeholder="Ismingiz" />
                    <input type="input" placeholder="Telefon raqamingiz" />
                    <button>Yuborish</button>
                </form>
                <div className='CT_contact'>
                    <div className='CT_phone'>
                        <p>Telefon</p>
                        <h3>+998 71 123-45-67</h3>
                    </div>
                    <div className='CT_mail'>
                        <p>Email</p>
                        <h3>info@egarson.uz</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTwo