import {useEffect,useState} from "react";

const ImageTag = ({src,alt,classValue}) => {
    const [image, setImage] = useState("/images/loading.png");

    useEffect(() => {

        const img = new Image();
        img.src = src;
        img.onload = (e) => {
            setImage(src)
        }
        img.onerror = () => {
            setImage("/images/noImage.png");
        }
    }, [src]);

    return (
        <img src={src} alt={alt} className={classValue} />
    )
}

export default ImageTag;