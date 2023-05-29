import logo from "../../logo.png";
import HeaderStyled from "./HeaderStyle";

type Props = {}

const Header = (props: Props) => {
    return (
        <HeaderStyled>
            <header>
                <div className="c1">
                    <img src={logo} className="logo" alt="" />
                </div>
                <div className="c2">
                    <ul>
                        <li>Portal Franqueado</li>
                    </ul>
                </div>
            </header>
        </HeaderStyled>

    )
}

export default Header;