import React from 'react'

function AdsOne() {
    return (
        <div className='Ads_Container'>
            <div className='Ads_down_container'>
                <img src='IconGreen.svg' alt='Icon' className='greenIcon' />
                <h1>AllOne ilovasini hoziroq yuklab oling!</h1>
                <div className='Ads_download'>
                    <img src='App Store Green.png' alt='AppStore white' />
                    <img src='Google Play Green.png' alt='PlayMarket whit' />
                </div>
            </div>
            <img src='./PhoneGreen.png ' alt='Phone' className='Ads_phone' />
        </div>
    )
}

export default AdsOne