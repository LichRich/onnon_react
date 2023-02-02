import React from "react";
import ListBody from "../components/ListBody";

import "../css/list_style.css";

const List = ({settings, db, keyword}) => {
    return(
        <ListBody settings={settings} db={db} keyword={keyword} />
    )
}

export default List;