import "../../../../styles/DevelopmentServiceCard.css"
import ServiceInfoCardPicture from "../service_info_card/ServiceInfoCardPictureContainer";

export default function DevelopmentServiceCard() {
    return (
        <section>
            <ServiceInfoCardPicture
                alt="computer illustration"
                defaultSrc="./assets/images/computer-image-xl.png"
                xsImageSrc="./assets/images/computer-image-xs.png"
                sImageSrc="./assets/images/computer-image-s.png"
                lImageSrc="./assets/images/computer-image-l.png"
                xlImageSrc="./assets/images/computer-image-xl.png"
            />
        </section>
    );
}