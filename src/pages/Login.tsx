
import axios from "axios"
import React, { FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button/Button"
import Input from "../components/Input/Input"
import Modal from "../components/Modal/Modal"
import Logo from "../images/logo.png"

import { ResponseSuccess } from "../types/types"
import LoginStyled from "./LoginStyled"

/*const target = event.target as HTMLElement
if (target.classList.contains("hide_modal")) {
 // setIsShow(false)
}*/



interface ResponseData extends ResponseSuccess {
  data: Record<string, any>;
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = useState(Object);

  // const [usernameError, setUsernameError] = useState('');
  //const [passwordError, setPasswordError] = useState('')

  const closeModal = () => {
    setNeedShowModal(false);
  };

  const [needShowModal, setNeedShowModal] = useState(false)
  const [needModal, setNeedModal] = useState("val_user")


  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("tentative login");

    try {

      setNeedModal("val_user");
      setNeedShowModal(true);

      const response: ResponseData = await axios.post(`/Login.vtt?action=login&TxLogin=${username}&TxSenha=${password}`);
      var Data: Record<string, object>;

      if (typeof response.data === 'string') {
        Data = eval("(" + response.data + ")");
      } else {
        Data = response.data;
      }
      setData(Data);

      if (Data.success) {
        navigate("/home.vtt");
      } else {
        console.log(Data.error)
      }
      closeModal()
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  return (
    <LoginStyled >
      <form className="c" onSubmit={handleSubmit}>
        <div className="c_logo">
          <img src={Logo} alt="" />
        </div>
        <div className="c_input">
          <div className="c_field_name">
            LOGIN:
          </div>
          <Input
            onChange={handleUsernameChange}
            type="text"
            required={true}
            onInvalid={e => e.target.setCustomValidity("Campo Usuário não pode ser vazio.")}
            onInput={e => e.target.setCustomValidity('')} />

        </div>
        <div className="c_input">
          <div className="c_field_name">
            SENHA:
          </div>

          <Input onChange={handlePasswordChange}
            type="password"
            required={true}
            onInvalid={e => e.target.setCustomValidity("Campo Senha não pode ser vazio.")}
            onInput={e => e.target.setCustomValidity('')} />

          <div className="c_esq_senha"
            onClick={() => {

              setNeedModal("remember_password");
              setNeedShowModal(true);
            }} >Esqueci minha senha</div>
        </div>
        <Button text="ENTRAR" />
      </form>
      {needShowModal && < ModalsLogin element={needModal} onClose={closeModal} show={needShowModal} />}

    </LoginStyled>

  )
}

export default Login;




type Props = {
  element: string;
  onClose: () => void;
  show?: boolean
}
const ModalsLogin = ({ element, onClose, show }: Props) => {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");

  const onClose2 = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (target.classList.contains("hide_modal")) {
      onClose()
    }
  }
  const handleSubmitRememberPassword = async (event: FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    try {
      const response: ResponseData = await axios.post(`/Login.vtt?action=lembrar_senha&TxLogin=${usuario}&TxEmail=${email}`);
      let Data;

      if (typeof response.data === 'string') {
        Data = eval("(" + response.data + ")");
      } else {
        Data = response.data;
      }
      if (Data.success) {
        console.log(Data.message)
        onClose();
      }else {
        console.log("teste")
      }
     
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  const Modals: Record<string, JSX.Element> = {

    val_user: <Modal title="Validando Usuário" show={show} onClose={onClose} type="loading" />,
    remember_password: <Modal
      buttons={[{
        text: "OK"
      }]}
      show={show}
      inputs={[
        { Label: "Usuário", onChange: (event) => { setUsuario(event.target.value) } },
        { Label: "E-Mail", onChange: (event) => { setEmail(event.target.value) } }
      ]}
      title="Lembrar Senha"
      type="forgotPassword"
      onClose={onClose2}
      handleSubmit={handleSubmitRememberPassword}
    />

  }
  return Modals[element]
}
