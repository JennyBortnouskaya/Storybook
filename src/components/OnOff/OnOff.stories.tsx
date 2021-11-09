import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';



import {Button} from '../../stories/Button';
import {OnOff} from "./OnOff";
import Rating, {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'OnOff stories',
    component: OnOff,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>;

const callback = action("on or off clicked")

export const OnMode = () => <OnOff on={true} onChange={callback}/>
export const OffMode = () => <OnOff on={false} onChange={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff on={value} onChange={setValue}/>
}


// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
//
// export const Primary = Template.bind({});
//
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
