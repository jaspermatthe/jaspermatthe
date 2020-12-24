import React from "react"
import backtotopStyles from "./backtotop.module.css"

const BT = () => {
    return (
        <div className={backtotopStyles.btcontain}>
            <a href="#top" className={backtotopStyles.backtotop} title="Back to top"><i className="fas fa-chevron-up fa-3x"></i></a>
        </div>
    )
}

export default BT
