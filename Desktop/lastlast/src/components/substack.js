import React from "react"
import substackStyles from "./substack.module.css"

const Substack = () => {
    return (
        <div className={substackStyles.embedpage}>
            <div className={substackStyles.emailsub}>
                <iframe className={substackStyles} title="subscribe" src="https://jaspermatthe.substack.com/embed" ></iframe>
            </div>
        </div>
    )
}

export default Substack

