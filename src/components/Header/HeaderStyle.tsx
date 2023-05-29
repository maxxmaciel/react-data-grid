import styled from 'styled-components';


const HeaderStyled = styled.header`
header {
    background: #EBEEF0;
    position: relative;
    top: 0;
    width: 100%;
    box-shadow: inset 0px 8px 18px rgba(0, 0, 0, 0.25);

    >.c1{
    height: 90px;
    display: flex;
    align-items: center;
    padding: 0px 2vw;
    .logo{
        height: 52px;
        cursor: pointer;
    }
    }
    >.c2{
        height: 34px;
        background-color: #212121;
        border: 1px solid #212121;
        padding: 0px 2vw;
        display: flex;
        align-items: center;
     }
      ul {
        display: flex;
        gap: 17px;
         li {
            font-family: 'Lato Bold';
            font-size: 16px;
            list-style-type: none;
            color: #fff;
            cursor: pointer;
        }
     }
}

`
export default HeaderStyled;