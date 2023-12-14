import "../../../../styles/DevelopmentServicePicture.css"

export default function DevelopmentServicePicture() {
    return (
        <picture className="development-service__image" >
            <source media="(max-width:576px)" srcset="./assets/images/magnifier-image-xs.png" />
            <source media="(max-width:768px)" srcset="./assets/images/magnifier-image-s.png" />
            <source media="(max-width:992px)" srcset="./assets/images/magnifier-image-l.png" />
            <source media="(min-width:1200px)" srcset="./assets/images/magnifier-image-xl.png" />
            <img alt="magnifier illustration" src="./assets/images/magnifier-image-xl.png" />
        </picture>
    );
}