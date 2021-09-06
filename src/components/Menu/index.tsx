import React from 'react'
import avatar from 'assets/img/avatar.png'
import logo from 'assets/img/logo.png'
import ImgButton from  'components/Button/ImgButton'
import MenuItem from './menuItem'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

const Menu = () => {
    const onClickButton = () => {
        console.log("asdf")
    }
    return (
        <div id="container">
            <div id="navBar" className="floatingNav">
                <div>
                    <img src={avatar} alt="avatar"/>
                    <img src={logo} alt="logo"/>
                </div>
                <div className="flex-row float-right mr-15">
                    <div className = "flex-row">
                        <MenuItem text="How to Play" />
                        <MenuItem text="Community" />
                        <MenuItem text="ArcadeMarket" />
                    </div>
                    <ImgButton className="btn btn-warning btn-image" onClick={onClickButton} image={faWallet} text="Connect Wallet"/>
                    <ImgButton className="btn btn-danger btn-image" onClick={onClickButton} image={faUserAstronaut} text="Play Game"/>
                </div>
            </div>
        </div>
    )
}

export default Menu