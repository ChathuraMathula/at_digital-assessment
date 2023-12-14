import "../../styles/Footer.css";
import FooterDescription from "./FooterDescription";
import FooterLink from "./FooterLink";
import FooterLinkContainer from "./FooterLinkContainer";
import FooterTermsNavigation from "./FooterTermsNavigation";

export default function Footer() {
    return (
        <footer>
            <FooterDescription />
            <FooterLinkContainer title="Our Technologies">
                <FooterLink>ReactJS</FooterLink>
                <FooterLink>Gatsby</FooterLink>
                <FooterLink>NextJS</FooterLink>
                <FooterLink>NodeJS</FooterLink>
                <FooterLink>GraphQL</FooterLink>
                <FooterLink>Laravel</FooterLink>
            </FooterLinkContainer>
            <FooterLinkContainer title="Our Services">
                <FooterLink>Social media Marketing</FooterLink>
                <FooterLink>Web & Mobile App Development</FooterLink>
                <FooterLink>Data & Analytics</FooterLink>
                <FooterLink>Google Marketing solutions</FooterLink>
                <FooterLink>Search Engine Optimization</FooterLink>
            </FooterLinkContainer>
            <FooterTermsNavigation />
        </footer>
    );
}