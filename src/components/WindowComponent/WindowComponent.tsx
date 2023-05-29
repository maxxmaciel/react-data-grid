import React from "react";

type Props = {
    title?: string;
    children?: React.ReactNode;
}

const WindowComponent = ({ title, children }: Props) => {
    return (
        <div className="c">
            <div className="t">{title}</div>
            {children}
        </div>
    )
}

export default WindowComponent;