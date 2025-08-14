import type { Photo } from "@/models/Images";
import Image from "next/image";

type PropsType = {
	photo: Photo;
};

const ImageContainer = ({ photo }: PropsType) => {
	return (
		<div
			className="h-64 bg-gray-200 rounded-3xl relative overflow-hidden"
		>
			<Image
				src={photo.src.large}
				alt={photo.alt}
				fill={true}
                placeholder="blur"
                blurDataURL={photo.blurredDataUrl}
                className="object-cover hover:opacity-75"
				sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
			/>
		</div>
	);
};

export default ImageContainer;
