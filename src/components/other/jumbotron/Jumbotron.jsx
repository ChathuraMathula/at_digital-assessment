import "../../../styles/Jumbotron.css";
import SecondaryColorButton from "../../ui/buttons/SecondaryColorButton";

export default function Jumbotron() {
    return (
        <div className="jumbotron__container">
            <picture className="jumbotron__image" >
                <source media="(max-width:576px)" srcSet="./assets/images/main-image-xs.png" />
                <source media="(max-width:768px)" srcSet="./assets/images/main-image-s.png" />
                <source media="(max-width:992px)" srcSet="./assets/images/main-image-l.png" />
                <source media="(min-width:1200px)" srcSet="./assets/images/main-image-xl.png" />
                <img alt="jumbotron image" src="./assets/images/main-image-xl.png" />
            </picture>
            <div className="jumbotron-heading__container">
                <p>We crush your competitors, goals, and sales records - without the B.S.</p>
                <SecondaryColorButton>GET FREE CONSULTATION</SecondaryColorButton>
            </div>

        </div>
    );
}