import { useState } from "react";
import BoxSelectorStyle from "./BoxSelectorStyle";
import React from "react";

type Props = {
    options: string[];
    selected: (str: string) => void;
    flexDirection?: 'row' | 'column';
    width?: string | number;
    justifyContent?: 'center' | 'flex-start';
    marginLeft?: string | number;
    optionChecked?: number;
}

const BoxSelector = ({ optionChecked = -1, options, flexDirection, selected, width, justifyContent, marginLeft}: Props) => {

    const [Selected, setSelected] = useState(optionChecked);

    const SelectedSection = (n: number, item: string) => {
        setSelected(n);
        selected(item);
    }

    return (
        <BoxSelectorStyle pressed={Selected} flexDirection={flexDirection} width={width} justifyContent={justifyContent} marginLeft={marginLeft}>
            <div className="container">
                {options.map((item, index) => (
                    <div key={index} className={"c c" + index} onClick={() => { SelectedSection(index, item) }}  > <p>{item}</p></div>
                ))}
            </div>

        </BoxSelectorStyle>
    )
}

export default BoxSelector;