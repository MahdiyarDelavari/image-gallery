import type { Photo } from "@/models/Images";
import Image from "next/image";
import Link from "next/link";
type PropsType = {
	photo: Photo;
};

const ImageContainer = ({ photo }: PropsType) => {
	const widthHeightRatio = photo.height / photo.width;
	const galleryHeight = Math.ceil(250 * widthHeightRatio);
	const photoSpans = Math.ceil(galleryHeight / 10) + 1;
	return (
		<div
			className="w-[250px] justify-self-center"
			style={{ gridRow: `span ${photoSpans}` }}
		>
			<Link
				href={photo.url}
				target="_blank"
				className="grid place-content-around"
			>
				<div className="oveflow-hidden">
					<Image
						src={photo.src.large}
						alt={photo.alt}
                        width={photo.width}
                        height={photo.height}
						placeholder="blur"
						blurDataURL={photo.blurredDataUrl}
						className="hover:opacity-75 rounded-2xl"
						sizes="250px"
					/>
				</div>
			</Link>
		</div>
	);
};

export default ImageContainer;
