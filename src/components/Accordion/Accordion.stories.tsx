import {useState} from "react";
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";

export default {
    title: 'Accordion',
    component: Accordion,
    argTypes:{
        color:{
            control: 'color'
        }
    }
}

const callback = action("accordion mode change event fired");
const onClickCallback = action("some item was clicked");

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args}/>

const callbackProps = {
    onChange: callback,
    onClick: onClickCallback
}

export const MenuCollapsedMode2 = Template.bind({});
MenuCollapsedMode2.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: true,
    items: []

}
export const UsersUncollapsedMode2 = Template.bind({});
UsersUncollapsedMode2.args = {
    ...callbackProps,
    title: "Menu",
    collapsed: false,
    items: [
        {title: 'Jenny', value: 1},
        {title: 'Vlada', value: 2},
        {title: 'Flash', value: 3},
        {title: 'Sergey', value: 4},
    ],
}

// export const MenuCollapsedMode = () =>
//     <Accordion title={"Menu"} collapsed={true} onChange={callback}/>

// export const UsersUncollapsedMode = () =>
//     <Accordion title={"Users"} collapsed={false} onChange={callback}/>

export const ModeChanging: Story<AccordionPropsType> = (args: AccordionPropsType) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion  {...args} collapsed={value} onChange={() => setValue(!value)}/>
}
ModeChanging.args = {
    title: "Users",
    items: [
        {title: 'Jenny', value: 1},
        {title: 'Vlada', value: 2},
        {title: 'Flash', value: 3},
        {title: 'Sergey', value: 4},
    ],
    onClick: onClickCallback,
    collapsed: false
}
