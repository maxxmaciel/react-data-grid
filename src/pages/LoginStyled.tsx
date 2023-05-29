import styled from 'styled-components';


const LoginStyled = styled.div` 
  
    >.c{
    display: flex;
    margin-top: 74px;
    flex-direction: column;
    -webkit-box-align: center;
    gap: 39px;
    align-items: center;

        >.c_logo{
          background: #FFFFFF;
          border: 1px solid #221122;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 10px;
          width: 297px;
          height: 135px;
          display: flex;
          justify-content: center;
          align-items: center;
          img{
            width: 160px;
          }
        }
        
        >.c_input{
            display: flex;
            width: 548px;
            justify-content: center;
            >  .c_field_name {
                position: absolute;
                left: 0;
                top: 17px;
                font-family: Lato;
                font-style: normal;
                font-weight: 700;
                font-size: 16px;
                line-height: 19px;
                text-align: center;
                color: rgb(33, 33, 33);
               }
            >.c{
                width: 85px;
                font-family: "Lato Bold";
                font-size: 16px;
                text-align: center;
                display: flex;
                color: rgb(33, 33, 33);
                align-items: center;
            }
            >.c_esq_senha {
                position: absolute;
                font-family: "Lato Bold";
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 19px;
                text-align: center;
                color: rgb(33, 33, 33);
                left: 73px;
                top: 56.2px;
                cursor: pointer;
            }
        }
        >button {
            width: 128px;
            height: 32px;
            background: #212121;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            color: #FFFFFF;
            font-family: 'Lato Bold';
            font-size: 16px;
            cursor: pointer;
        }
    }
  
 
    
`
export default LoginStyled;