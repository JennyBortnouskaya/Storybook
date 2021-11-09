import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import { OnOff } from './components/OnOff/OnOff';
import Rating, {RatingValueType} from './components/Rating/Rating';
import {UncontrolledRating} from './components/UncontrolledRating/UncotrolledRating';
import { UncontrolledOnOff } from './components/UncotrolledOnOff/UncontrolledOnOff';


function App(props: any) {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    const [switchOn, setSwitchOn] = useState<boolean>(true);

    return (
        <div className={"App"}>
            <Accordion title={"Menu1"} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<UncontrolledAccordion title={"Menu2"}/>*/}

            <UncontrolledRating/>

            <UncontrolledOnOff onChange={setSwitchOn}/>          {switchOn.toString()}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>;
}

export default App;