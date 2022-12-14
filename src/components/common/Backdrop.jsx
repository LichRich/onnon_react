import React from "react";

const Backdrop = ({open, click}) => {
    return (
        <div className={open?"backdrop":"backdrop backdrop-open"} onClick={click}></div>
    )
}

export default Backdrop;