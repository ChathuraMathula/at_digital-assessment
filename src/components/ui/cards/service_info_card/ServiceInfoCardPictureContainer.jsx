import "../../../../styles/ServiceInfoCardPicture.css";

export default function ServiceInfoCardPicture({
    alt,
    defaultSrc,
    xsImageSrc,
    sImageSrc,
    lImageSrc,
    xlImageSrc
}) {
    return (
        <picture className="consulting-service__image" >
            <source media="(max-width:576px)" srcset={xsImageSrc} />
            <source media="(max-width:768px)" srcset={sImageSrc} />
            <source media="(max-width:992px)" srcset={lImageSrc} />
            <source media="(min-width:1200px)" srcset={xlImageSrc} />
            <img alt={alt} src={defaultSrc} />
        </picture>
    );
}