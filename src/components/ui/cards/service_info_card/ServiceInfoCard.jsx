import "../../../../styles/ServiceInfoCard.css";
import SecondaryColorButton from "../../buttons/SecondaryColorButton";

export default function ServiceInfoCard({ title, description }) {
    return (
        <div className="service-info-card__container">
            <h2>{title}</h2>
            <p>{description}</p>
            <SecondaryColorButton>LEARN MORE</SecondaryColorButton>
        </div>
    );
}