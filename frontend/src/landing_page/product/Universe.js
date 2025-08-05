import React from 'react'

function Universe() {
    return (  
        <div className='container mt-5 text-center'>
            <div className='row'>
                <div  className='text-muted'>
                <h1 className='mb-3 mt-3'>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
            
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png'/>
                    <p className='text-muted text-small'>Thematic investment platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{height:"55px" , width:"166px"}}/>
                    <p className='text-muted text-small'>Algo & strategy platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg'/>
                    <p className='text-muted text-small'>Options trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{height:"55px" , width:"166px"}}/>
                    <p className='text-muted text-small'>Assest management</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' style={{width:"300" ,height:"200"}}/>
                    <p className='text-muted text-small'>Bonds trading platform</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{height:"55px" , width:"166px"}}/>
                    <p className='text-muted text-small'>Insurance</p>
                </div>
                    <button className = 'p-2 btn btn-primary fs-5'style={{width: "20%" , margin: "0  auto" }}>SignUp Now</button>
            </div>
        </div>
    );
}

export default Universe;