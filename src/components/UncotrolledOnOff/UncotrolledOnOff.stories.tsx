import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'Uncontrolled OnOff',
    component: UncontrolledOnOff
}

const callback = action("accordion mode change event fired");
// const onClickCallback = action("some item was clicked");


export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>
