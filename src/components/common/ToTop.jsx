import {React, useState, useEffect} from "react";
import { Icon } from "semantic-ui-react";

const ToTop = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

    }
    useEffect(() => {
        const handleShowButton = () => {
            if (window.scrollY > 300) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        window.addEventListener("scroll", handleShowButton)
        return () => {
            window.removeEventListener("scroll", handleShowButton)
        }
    }, [])

    return showButton && (
        <div className="scroll-up">
            <button id="to-top" onClick={scrollToTop} type="button" >
                <Icon name="angle double up"></Icon>
            </button>
        </div>
    )
}

export default ToTop;