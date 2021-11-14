import React, { useState } from "react";
import {AccordionBody, AccordionTitle } from "../Accordion/Accordion";

type UncontrolledAccordionPropsType = {
    title: string;
    // onClick: () => void;
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.title} onChange={() => {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    );
}
