import { ChangeEventHandler } from 'react';
import spinner from '../../images/spinner.gif';
import Button from "../Button/Button";
import Input from '../Input/Input';
import ModalStyled from "./ModalStyled";

type Props = {
    title?: string;
    inputs?: Array<Inputs>;
    buttons?: Array<Buttons>;
    type: "loading" | "forgotPassword"
    onClose: (event: React.MouseEvent<HTMLElement>) => void;
    show?: boolean;
    handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface Buttons {
    text?: string;
    event?: () => void;
    key?: number;
}

interface Inputs {
    Label?: string
    onChange: ChangeEventHandler<HTMLInputElement>

}

type PropsWithoutType = Omit<Props, 'type'>;

const Types = {
    "loading": () =>
        <div className="c2"> <img src={spinner} alt="" /></div>
    ,
    "forgotPassword": ({ buttons, inputs, handleSubmit }: PropsWithoutType) =>

        <form onSubmit={handleSubmit}>
            <div className='c2'>
                {inputs &&
                    inputs.map((input, idx) =>
                        <Input key={idx} placeholder={input.Label}
                            type='text'
                            onChange={input.onChange}
                            width="290px"
                            height="38px"
                            onInvalid={e => e.target.setCustomValidity(`Campo ${input.Label} não pode ser vazio.`)}
                            required={true} onInput={e => e.target.setCustomValidity('')} />
                    )
                }
            </div>
            <div className='c3'>
                {buttons &&
                    <div className="c_buttons"> {

                        buttons.map((button, idx) =>
                            <Button key={idx} text={button.text} />
                        )
                    }
                    </div>
                }
            </div>
        </form>
}



const Modal = ({ title, buttons, type, inputs, show, onClose, handleSubmit }: Props) => {

    return (
        <ModalStyled display={show ? "flex" : "none"} className='hide_modal' onMouseDown={onClose}>
            <div className="c">
                {title && <div className="t"> <p>{title}</p></div>}
                < ButtonX />
                {Types[type]({ buttons: buttons, inputs: inputs, onClose: onClose, handleSubmit: handleSubmit })}
            </div>
        </ModalStyled>
    )
}

export default Modal

const ButtonX = () => <div className="button-x buttons-x hide_modal">
    <div className="deg45-r hide_modal"></div>
    <div className="deg135-r hide_modal"></div>
</div>