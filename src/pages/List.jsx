import React from "react";
import ListBody from "../components/ListBody";

import "../css/list_style.css";

const List = ({settings, db}) => {
    return(
        <ListBody settings={settings} db={db} />
    )
}

export default List;