

import "../../styles/FooterLinkContainer.css";

export default function FooterLinkContainer({ title, children }) {
    return (
        <div className="footer-link__container">
            <h3>{title}</h3>
            <ul>
                {children}
            </ul>
        </div>
    );
}