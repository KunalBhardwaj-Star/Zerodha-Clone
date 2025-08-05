import React from 'react'

function Hero() {
    return (  
        <div className='container p-5 mb-4'>
            <div className='row text-center'>
                <img src = 'media/images/homeHero.png' alt='Hero Img' className='mb-5'/>
                <h1 className='mt-5'>
                    Invest in everything
                </h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <button className = 'p-3 btn btn-primary fs-5'style={{width: "20%" , margin: "0  auto" }}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Hero;