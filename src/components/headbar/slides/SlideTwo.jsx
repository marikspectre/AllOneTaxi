import React from 'react'

function SlideTwo() {
    return (
        <div className='SlideTwo'>
            <div className='sl_container'>
                <h3>AllOne kompaniyasi bilan hamkorlik mobaynida, quyidagi xizmatlar bo’yicha ish faoliyatini amalga oshira olasiz:</h3>
                <div className='sl_cards_con'>
                    <div className='sl_card'>
                        <p>Shahar ichki taksi</p>
                        <img src='./Taxi.png' alt='Taxi' />
                    </div>
                    <div className='sl_card'>
                        <p>Viloyatlararo taksi</p>
                        <img src='./Samarqand.png' alt='Taxi' width={200} />
                    </div>
                    <div className='sl_card'>
                        <p>Xalqaro taksi</p>
                        <img src='./Globe.png' alt='Taxi' width={200} />
                    </div>
                    <div className='sl_card'>
                        <p>Yetkazib berish</p>
                        <img src='./Box.png' alt='Taxi' width={130} />
                    </div>
                </div>
            </div>
            <div className='sl_why'>
                <img src='./Drive.png' alt='Drive' />
                <div className='sl_why_cards'>
                    <h3>Nega AllOne?</h3>
                    <div className='sl_st_cards'>
                        <div className='sl_st_card'>
                            <img src='./Graph-up-arrow.svg' alt='Icon' />
                            <div className='sl_st_text'>
                                <h4>Barqaror daromad manbayi</h4>
                                <p>Bizning ilova yordamida o’z daromadingizni oshiring va bonuslarga ega bo’ling.</p>
                            </div>
                        </div>
                        <div className='sl_st_card'>
                            <img src='./Time.svg' alt='Icon' />
                            <div className='sl_st_text'>
                                <h4>Qulay ish jadvali</h4>
                                <p>O'zingiz istagan va o'zingizga qulay payt ishlang.</p>
                            </div>
                        </div>
                        <div className='sl_st_card'>
                            <img src='./Credit-card.svg' alt='Icon' />
                            <div className='sl_st_text'>
                                <h4>Pulingiz o’z hisobingizda</h4>
                                <p>Safarlar uchun to’lovlarni naqd pul va plastik kartalari orqali qabul qilasiz. Plastik kartalari orqali to’langan safarlar to’lovi sizning o’z plastik kartangizga tushadi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sl_how'>
                <div className='sl_how_content'>
                    <h1>Bu qanday ishlaydi?</h1>
                    <img src='./BG_Blur-2.png' alt='background' />
                </div>
                <div className='sl_how_cards'>
                    <div className='sl_how_card'>
                        <img src='./Sl_card1.png' alt='Phone' />
                        <p>1. AllOne tizimiga ulaning</p>
                    </div>
                    <div className='sl_how_card'>
                        <img src='./Sl_card2.png' alt='Phone' />
                        <p>2. Ilova orqali buyurtmalarni qabul qiling</p>
                    </div>
                    <div className='sl_how_card'>
                        <img src='./Sl_card3.png' alt='Phone' />
                        <p>3. Daromadlaringizni kuzatib boring</p>
                    </div>
                    <img className='Line' src='./Line.png' alt='Line' />
                </div>
            </div>
        </div>
    )
}

export default SlideTwo