import React from "react";
import "../css/Button.scss";

export default function Button(props) {
    
    let classes = "";

    for(const [key, value] of Object.entries(props)) {
        classes = classes + ` ${key}${String(value)[0].toUpperCase() + String(value).slice(1) }`;    

    }

    return <div className={"btn" + classes} tabIndex={0}>Default</div>
}