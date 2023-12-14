

import "../../styles/FooterTermsNavigation.css";
import FooterLink from "./FooterLink";

export default function FooterTermsNavigation() {
    return (
        <div className="footer-terms-navigation__container">
            <div>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
    );
}