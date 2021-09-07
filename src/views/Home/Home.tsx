import React, { useState, useEffect } from 'react'
import ImgButton from  'components/Button/ImgButton'

import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Home: React.FC = () => {
    const onClickButton = () => {
        console.log("asdf")
    }

    return (
        <div className="page-content"> 
            <div className="fit-content">
                <iframe />
                <div className="rect rect-1" />
                <div className="rect rect-2" />
                <div className="rect rect-3" />
                <div className="rect rect-4" />
                <div className="rect rect-5" />
                <div className="rect rect-6" />
                <div className="rect rect-7" />
                <div className="rect rect-8" />
                <div className="rect rect-9" />
                <div className="rect rect-10" />
                <div className="rect rect-11" />
                <div className="rect rect-12" />
            </div>
            <div className="flex-row row">
                <ImgButton className="btn btn-danger btn-image" onClick={onClickButton} image={faUserAstronaut} text="Buy ArcadeDoges"/>
                <ImgButton className="btn btn-warning btn-image" onClick={onClickButton} image={faShoppingCart} text="Vend at ArcadeMarket"/>
            </div>
            
        </div>
    )
}

export default Home