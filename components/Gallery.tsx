import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImageContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import paginationFunction from "@/lib/pagination";
import Footer from "./Footer";
type Props = {
	topic?: string | undefined;
	page?: string | undefined;
};

const Gallery = async ({ topic = "curated", page }: Props) => {
	const url =
		topic === "curated" && page
			? `https://api.pexels.com/v1/curated?page=${page}`
			: topic === "curated"
			? "https://api.pexels.com/v1/curated"
			: !page
			? `https://api.pexels.com/v1/search?query=${topic}`
			: `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;

	const images: ImagesResults | undefined = await fetchImages(url);

	if (!images || images.per_page === 0) {
		return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
	}

	const photoWithBlur = await addBlurredDataUrls(images);

	//calculate pagination

	const { nextPage, prevPage } = paginationFunction(images)
	
	const footerProps = {topic , page, nextPage, prevPage};
	return (
		<>
			<section className="px-2 my-3 grid gap-2 grid-cols-gallery">
				{photoWithBlur.map((photo) => (
					<ImageContainer key={photo.id} photo={photo} />
				))}
			</section>

			<Footer {...footerProps} />
		</>
	);
};

export default Gallery;
