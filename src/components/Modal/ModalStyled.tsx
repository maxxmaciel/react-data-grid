import styled from 'styled-components';

interface ModalProps {
  display?: string;
}

const ModalStyled = styled.div<ModalProps>` 
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.50);
    position: fixed;
    top: 0;
    display: ${({ display }) => display};
    z-index: 1;

    >.c {
    position: relative;
    width: 400px;
    border-radius: 12px;
    padding-top: 42px;
    background-color: white;
    height: 194px;
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 1.08vw 1.08vw, rgba(0, 0, 0, 0.25) 0px 1.08vw 1.08vw inset;

    >.button-x {
    top: 0;
    right: 0;
    cursor: pointer;

    >.deg45-r {
    transform: rotate(-45deg);
    }

    >.deg135-r {
      transform: rotate(-135deg);
    }
    div {
      position: absolute;
        width: 4px;
        height: 32px;
        background: rgb(255, 246, 243);
        top: 5px;
        right: 18px;
    }
    }

 >.buttons-x {
  width: 42px;
    height: 42px;
    background: rgb(249, 24, 45);
    box-shadow: rgba(0, 0, 0, 0.25) -6px -6px 20px inset;
    border-radius: 10px;
    position: absolute;

}

>.t {
  top: 0px;
    position: absolute;
    width: 100%;
    left: 0px;
    height: 42px;
    font-size: 23px;
    border-radius: 10px 10px 10px 0px;
    color: rgb(255, 255, 255);
    background: rgb(33, 33, 33);
    >p {
     margin-left: 28px;
     margin-top: 6px;
    }
}
>.c2{
  display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    gap: 17px;
  >img {
    max-width: 100%;
    max-height: 100%;
  }
 
}
>.c3 {
  position: absolute;
  bottom: 0px;
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  }
  >form {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 14px;
    align-items: center;
    >.c2 {
      display: flex;
      gap: 14px;
      flex-direction: column;
      padding-top: 29px;
    }
  }
}


    
`

export default ModalStyled;