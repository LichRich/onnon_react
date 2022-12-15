import React from "react";
import ListBody from "../components/ListBody";

import "../css/list_style.css";

const List = ({settings}) => {
    return(
        <ListBody settings={settings} />
    )
}

export default List;