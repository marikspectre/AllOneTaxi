import React from 'react'

function Footer() {
    return (
        <footer className='footer_container'>
            <div className='footer_info'>
                <div>
                    <img src='./darkLogo.png' alt='Footer Logo ALlOne' />
                    <p>Sizning kundalik barcha ehtiyojingiz uchun ilova!</p>
                </div>
                <div>
                    <p>Telefon</p>
                    <h3>+998 71 123-45-67</h3>
                </div>
                <div>
                    <p>Email</p>
                    <h3>allone2020.uz@gmail.com</h3>
                </div>
                <div>
                    <p>Manzil</p>
                    <h3>Узбекистан, Ташкент, 100000,<br /> ул. Амир Темур, 4</h3>
                </div>
            </div>
            <div className='footer_soc'>
                <p className='footer_icon'>© 2020  AllOne Group</p>
                <div className='footer_soc_msg'>
                    <p>Telegram</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer