import {useState} from "react";
import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("accordion mode change event fired");
// const onClickCallback = action("some item was clicked");

export const MenuCollapsedMode = () =>
    <Accordion title={"Menu"} collapsed={true} onChange={callback}/>

export const UsersUncollapsedMode = () =>
    <Accordion title={"Users"} collapsed={false} onChange={callback}/>
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <Accordion title={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
}

