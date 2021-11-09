import React from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onChange: () => void;
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void;
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onChange()}} >{props.title}</h3>
    );
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;