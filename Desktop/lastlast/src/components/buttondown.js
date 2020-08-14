import React from "react"
import buttondownStyles from "./buttondown.module.css"

const Buttondown = () => {
    return (
        <form className={buttondownStyles.sub}
            action="https://buttondown.email/api/emails/embed-subscribe/jaspermatthe"
            method="post"
            target="popupwindow"
            onsubmit="window.open('https://buttondown.email/jaspermatthe', 'popupwindow')"
            class="embeddable-buttondown-form"
            >
            <p className={buttondownStyles.subscribetitle}>Subscribe to my Blog Here!</p>
            <label for="bd-email">Enter your email <i class="fas fa-arrow-right"></i> </label>
            <input type="email" name="email" id="bd-email"></input>
            <input type="hidden" value="1" name="embed"></input>
            <input type="submit" value="Subscribe"></input>
        </form>
    )
}

export default Buttondown

