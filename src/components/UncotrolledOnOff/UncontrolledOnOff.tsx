import {useState} from "react";

type OnOffType = {
    onChange: (on: boolean) => void;
}

export function UncontrolledOnOff(props: OnOffType) {

    let [on, setOn] = useState(false); // hook with init value

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        marginLeft: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: on ? "white" : "red"
    };
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }


    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>

            <div style={offStyle} onClick={offClicked}>Off</div>

            <div style={indicatorStyle}></div>
        </div>
    );
}

