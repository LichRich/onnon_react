import React from "react";
import DetailBody from "../components/DetailBody";

import "../css/detail_style.css";

const Detail = ({settings}) => {
    return(
        <DetailBody settings={settings} />
    )
}

export default Detail;