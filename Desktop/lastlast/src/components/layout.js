import React from "react"
import Header from "./header"
import Footer from "./footer"
import BT from "./backtotop"
import "../styles/style.css"
import layoutStyles from "./layout.module.css"


const Layout = props => {
    return(
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
        <Header />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <div className={layoutStyles.hello}>{props.children}</div>
        </div>
        <Footer />
        <BT />
    </div>
    )
}

export default Layout