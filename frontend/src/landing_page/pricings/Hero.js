import React from 'react'

function Hero() {
    return (
       <div className='container'>
            <div className='row pd-5 mt-5 border-bottom text-center'>
                <h1>Charges</h1>
                <h3 className='text-muted mt-3 fs-5'>List of all charges and taxes</h3>
                </div>
                <div className='col-lg-4 col-sm-12 p-5 text-center' >
                    <img src='media/images/pricing0.svg' style={{width: "150px" , height:"110px"}}/>
                    <h2 className='mt-2 mb-3 fs-1'>Free equity delivery</h2>
                    <p className='text-grey mt-2 fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-5 text-center' >
                    <img src='media/images/pricing0.svg' style={{width: "150px" , height:"110px"}}/>
                    <h2 className='mt-2 mb-3 fs-1'>Intraday and F&O trades</h2>
                    <p className='text-grey mt-2 fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-lg-4 col-sm-12 p-5 text-center' >
                    <img src='media/images/pricing0.svg' style={{width: "150px" , height:"110px"}}/>
                    <h2 className='mt-2 mb-3 fs-1'>Free direct MF</h2>
                    <p className='text-grey mt-2 fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
</p>
                </div>
            </div>
    );
}

export default Hero;