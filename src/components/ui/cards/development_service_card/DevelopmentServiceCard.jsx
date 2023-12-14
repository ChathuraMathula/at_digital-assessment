import "../../../../styles/DevelopmentServiceCard.css"
import ServiceInfoCard from "../service_info_card/ServiceInfoCard";
import ServiceInfoCardPicture from "../service_info_card/ServiceInfoCardPictureContainer";

export default function DevelopmentServiceCard() {
    return (
        <section className="development-service-card__container">
            <ServiceInfoCardPicture
                alt="computer illustration"
                defaultSrc="./assets/images/computer-image-xl.png"
                xsImageSrc="./assets/images/computer-image-xs.png"
                sImageSrc="./assets/images/computer-image-s.png"
                lImageSrc="./assets/images/computer-image-l.png"
                xlImageSrc="./assets/images/computer-image-xl.png"
            />
            <ServiceInfoCard title="Web & Mobile App Development" >
                Your web and mobile Apps are pieces of the puzzle to grow your business.
                We use frameworks which tailor content and engagement methods to respond
                to different intents shown by your potential customers who interact with
                your business online.
            </ServiceInfoCard>
        </section>
    );
}