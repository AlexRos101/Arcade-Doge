import React from "react"
import Discord from 'assets/img/discord.svg'
import Facebook from 'assets/img/facebook.svg'
import Twitter from 'assets/img/twitter.svg'
import Instagram from 'assets/img/instagram.svg'

const Footer = () => {
    return (
        <div className="footer"> 
            <div className="flex-row">
                <div className="footer-copyright">
                    <p> ArcadeDoge Game © 2021. </p>
                    <p> All Rights Reserved.</p>
                </div>
                <div className="footer-section">
                    <p className="footer-header">Play Game</p>
                    <a><p>How to Play</p></a>
                    <a><p>Buy ArcadeDoges</p></a>
                </div>
                <div className="footer-section">
                    <p className="footer-header">ArcadeMarket</p>
                    <a><p>Sell Customized Item</p></a>
                    <a><p>View Your Listings</p></a>
                </div>
                <div className="footer-section">
                    <p className="footer-header">Community</p>
                    <a><p>Join the Official</p></a>
                    <a><p>Discord Server!</p></a>
                </div>
                <div className="footer-section">
                    <p className="footer-header">Company</p>
                    <a><p>Term of Use</p></a>
                    <a><p>Privacy Policy</p></a>
                </div>
                <div className="footer-space" >&nbsp;</div>
                <div className="footer-link">
                    <p className="footer-header">Follow Us</p>
                    <div className="flex-row">
                        <img className="footer-follow-links" src={Discord} alt="Discord"/>
                        <img className="footer-follow-links" src={Facebook} alt="Facebook"/>
                        <img className="footer-follow-links" src={Twitter} alt="Twitter"/>
                        <img className="footer-follow-links" src={Instagram} alt="Instagram"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer