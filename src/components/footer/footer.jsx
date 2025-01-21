import { FooterStyled } from "./footer.styled";
import {
    FaPinterestSquare,
    FaInstagramSquare,
    FaFacebookSquare,
    FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
    return (
        <FooterStyled>
            <div className="container">
                <div className="footer-left">
                    <div className="footer-text">
                        <p className="highlight">WALLYWOOD</p>
                        <p>Øster Uttrupvej 1</p>
                        <p>9000 Aalborg</p>
                    </div>
                    <div className="footer-text">
                        <p>CVR: 12345678</p>
                        <p>MAIL: info@wallywood.dk</p>
                        <p>MOBIL: +45 9812 3456</p>
                    </div>
                </div>
                <div className="footer-right">
                    <FaPinterestSquare />
                    <FaInstagramSquare />
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                </div>
            </div>
        </FooterStyled>
    );
};
