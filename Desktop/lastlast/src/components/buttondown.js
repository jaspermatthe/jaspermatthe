import React from "react"
import buttondownStyles from "./buttondown.module.css"

const Buttondown = () => {
    return (
       <div className={buttondownStyles.display}>
        <form className={buttondownStyles.sub}
            action="https://buttondown.email/api/emails/embed-subscribe/jaspermatthe"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://buttondown.email/jaspermatthe', 'popupwindow')"
            class="embeddable-buttondown-form"
            >
            <p className={buttondownStyles.subscribetitle}>Subscribe to my Blog Here!</p>
            <label for="bd-email">Enter your email <i class="fas fa-arrow-right"></i> </label>
            <input className={buttondownStyles.inputbdemail} type="email" name="email" id="bd-email"></input>
            <input type="hidden" value="1" name="embed"></input>
            <input className={buttondownStyles.subbtn} type="submit" value="Subscribe"></input>
        </form>
        </div> 
    )
}

export default Buttondown

