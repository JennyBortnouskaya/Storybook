import {useState} from "react";

type OnOffType = {
    on: boolean
    onChange: (on: boolean) => void;
}

export function OnOff(props: OnOffType) {

    let [on, setOn] = useState(false); // hook with init value

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        marginLeft: "2px",
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        marginLeft: "5px",
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.onChange(true)
            }}>On
            </div>

            <div style={offStyle} onClick={() => {
                props.onChange(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    );
}

