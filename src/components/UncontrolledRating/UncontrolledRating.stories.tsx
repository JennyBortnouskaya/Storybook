import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import {Button} from '../../stories/Button';
import {UncontrolledRating} from "./UncotrolledRating";
import {RatingValueType} from "../Rating/Rating";
import {action} from "@storybook/addon-actions";


export default {
    title: 'UncontrolledRating stories',
    component: UncontrolledRating,

    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Button>;

const callback = action('ating chanched inside')

export const EmptyStar = () => <UncontrolledRating defaultValue={0} onChange={callback}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange={callback}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange={callback}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange={callback}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange={callback}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange={callback}/>


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
