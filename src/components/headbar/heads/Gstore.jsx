import React from 'react'

function Gstore() {
    return (
        <div className='Gstore'>
            <div className='Gstore_apk'>
                <h1>Sizning kundalik barcha ehtiyojingiz uchun ilova!</h1>
                <div className='Gstore_content'>
                    <p>Hoziroq yuklab oling!</p>
                    <div className='download'>
                        <img src='./App Store.png' alt='App Store' />
                        <img src='./Google Play.png' alt='Play market' />
                    </div>
                </div>
            </div>
            <img src='./Phone.png' alt='Phone' className='phone' />
            <img src='./BG_Blur.png' alt='Green Blur' className='Green_Blur' />
        </div>
    )
}

export default Gstore