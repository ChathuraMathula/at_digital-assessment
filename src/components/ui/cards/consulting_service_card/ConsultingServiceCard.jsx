import "../../../../styles/ConsultingServiceCard.css"
import ServiceInfoCard from "../service_info_card/ServiceInfoCard";
import ServiceInfoCardPicture from "../service_info_card/ServiceInfoCardPictureContainer";

export default function ConsultingServiceCard() {
    return (
        <section className="consulting-service-card__container">
            <ServiceInfoCardPicture
                alt="magnifier illustration"
                defaultSrc="./assets/images/magnifier-image-xl.png"
                xsImageSrc="./assets/images/magnifier-image-xs.png"
                sImageSrc="./assets/images/magnifier-image-s.png"
                lImageSrc="./assets/images/magnifier-image-l.png"
                xlImageSrc="./assets/images/magnifier-image-xl.png"
            />
            <ServiceInfoCard title="Digital Strategy Consulting" >
                Your digital strategy should complement the overall marketing strategy
                of the company. In online marketing, each component will never work in
                isolation and every business needs a different mix. We provide a clear
                concept and strategic overview to find the most efficient model for your
                business.
            </ServiceInfoCard>
        </section>
    );
}