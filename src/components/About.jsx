import React from 'react'
export default function About(){
    return(
        <div className='footer'>
            <div className='left-div'>
                <div className='links'>
                    <a href="/about">About Disney+ Hotstar</a>
                    <a href="/terms">Terms of Use</a>
                    <a href="/privacy">Privacy Policy</a>
                    <a href="/faq">FAQ</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/careers">Careers</a>
                </div>
                <p>© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel
                    and programming logos are service marks of, and all related programming visuals 
                    and elements are the property of, Home Box Office, Inc. All rights reserved.
                </p>
            </div>
            <div className='middle-div'>
                <h3>Connect with us</h3>
                <img src="../images/icons8-facebook-f-48.png" alt="not found" width={35}/>
                <img src="../images/twitter-xxl.png" alt="not found" width={35}/>
            </div>
            <div className='right-div'>
                <h3>Disney+ Hotstar App</h3> 
                <div className="flexbox">
                    <div className="playstore">
                        <img src="../images/play-store.png" alt="not found" width={25}/>
                        <div className="get-it">
                            <p>GET IT ON</p> 
                            <h3>Google Play</h3>
                        </div>
                    </div>
                    <div className="appstore">
                        <img src="../images/mac-icon.png" alt="not found" width={30}/>
                        <div className="get-it">
                            <p>Download on the</p>
                            <h3>App Store</h3>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}