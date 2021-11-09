import {useState} from "react";
import Accordion from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}
//
// const callback = action("accordion mode change event fired");
// const onClickCallback = action("some item was clicked");
//
// export const MenuCollapsedMode = () => < Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
//                                                    onClick={onClickCallback}/>
//
// export const UsersUncollapsedMode = () => < Accordion titleValue={"Users"} collapsed={false} onChange={callback}
//                                                       items={[
//                                                           {title: 'Jenny', value: 1},
//                                                           {title: 'Sergey', value: 2},
//                                                           {title: 'Johny', value: 3},
//                                                           {title: 'Jinja', value: 4},
//
//                                                       ]} onClick={onClickCallback}/>
// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(true);
// }
//
