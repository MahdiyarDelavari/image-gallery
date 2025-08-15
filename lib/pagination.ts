import type { ImagesResults } from "@/models/Images";

const getPageNumber = (url: string) => {
	const { searchParams } = new URL(url);

	return searchParams.get("page");
};

const paginationFunction = (images: ImagesResults) => {
	let nextPage = images?.next_page ? getPageNumber(images.next_page) : null;

	const prevPage = images?.prev_page ? getPageNumber(images.prev_page) : null;

	const totalPages =
		images.total_results % images.per_page
			? Math.floor(images.total_results / images.per_page) + 1
			: images.total_results / images.per_page;

	if (prevPage && parseInt(prevPage) + 5 < totalPages) {
		nextPage = (parseInt(prevPage) + 5).toString();
	}

	if (nextPage && parseInt(nextPage) > totalPages) {
		nextPage = null;
	}

	return { nextPage, prevPage };
};

export default paginationFunction;
