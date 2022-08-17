import React from 'react'

function Phone() {
    return (
        <div className='Gstore'>
            <div className='Gstore_apk'>
                <h1>Haydovchilar uchun qulay daromad manbayi</h1>
                <div className='Phone_modal'>
                    <form>
                        <h3>Taksi haydovchisi bo’lib ishlash uchun hoziroq ariza qoldiring!</h3>
                        <div className='submit_modal'>
                            <input type='input' placeholder='Telefon raqamingiz' />
                            <button>Haydovchi bo'lish</button>
                        </div>
                    </form>
                    <p>Arizani yuborish bilan siz oferta shartlariga rozilik bildirasiz.</p>
                </div>
            </div>
            <img src='./Dr_Phone.png' alt='Phone' className='phone' />
            <img src='./BG_Blur.png' alt='Green Blur' className='Green_Blur' />
        </div>
    )
}

export default Phone