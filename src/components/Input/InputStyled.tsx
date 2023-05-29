import styled from 'styled-components';


interface Props {
    width?: number | string;
    height?: number | string;
}

const InputStyled = styled.div<Props>`  
    >input{
    width:   ${({ width = '396px' }) => width};
    height:  ${({ height = '47px' }) => height};
    background: rgb(255, 255, 255);
    border: 1px solid rgb(33, 33, 33);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
    border-radius: 5px;
    outline: none;
    font-family: Lato;
    font-size: 22px;
    line-height: 19px;
    text-align: left;
    padding-left: 13px;
    color: rgb(33, 33, 33);
   
}

`

export default InputStyled;