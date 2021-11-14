import {useState} from "react";
import {action} from "@storybook/addon-actions";
import { UncontrolledAccordion } from "./UncontrolledAccordion";

export default {
    title: 'Uncontrolled Accordion',
    component: UncontrolledAccordion
}

const callback = action("accordion mode change event fired");
// const onClickCallback = action("some item was clicked");


export const ModeChanging = () => {

   return <UncontrolledAccordion title={"Users"}/>
}

