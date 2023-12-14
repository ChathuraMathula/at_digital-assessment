import "../../../../styles/ConsultingServiceCard.css"
import ServiceInfoCardPicture from "../service_info_card/ServiceInfoCardPictureContainer";

export default function ConsultingServiceCard() {
    return (
        <section>
            <ServiceInfoCardPicture
                alt="magnifier illustration"
                defaultSrc="./assets/images/magnifier-image-xl.png"
                xsImageSrc="./assets/images/magnifier-image-xs.png"
                sImageSrc="./assets/images/magnifier-image-s.png"
                lImageSrc="./assets/images/magnifier-image-l.png"
                xlImageSrc="./assets/images/magnifier-image-xl.png"
            />
        </section>
    );
}