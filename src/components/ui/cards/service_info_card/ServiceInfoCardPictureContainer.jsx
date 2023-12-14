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
            <source media="(max-width:576px)" srcSet={xsImageSrc} />
            <source media="(max-width:768px)" srcSet={sImageSrc} />
            <source media="(max-width:992px)" srcSet={lImageSrc} />
            <source media="(min-width:1200px)" srcSet={xlImageSrc} />
            <img alt={alt} src={defaultSrc} />
        </picture>
    );
}