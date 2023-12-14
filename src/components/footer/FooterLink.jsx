import "../../styles/FooterLink.css";

export default function FooterLink({ href, children }) {
    return (
        <li className="footer-link">
            <a href={href}>
                {children}
            </a>
        </li>
    );
}