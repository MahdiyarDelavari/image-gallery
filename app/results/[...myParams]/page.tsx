import Gallery from "@/components/Gallery";

type Props = {
	params: {
		myParams: (string | undefined)[];
	};
};

export const generateMetadata = ({ params: { myParams } }: Props) => {
	const topic = myParams?.[0] ?? "curated";
	const page = myParams?.[1] ?? "1";
	return {
		title: `Results For ${topic} - page ${page}`,
	};
};

const page = ({ params: { myParams } }: Props) => {
	const topic = myParams?.[0] ?? "curated";
	const page = myParams?.[1] ?? "1";
	return <Gallery topic={topic} page={page} />;
};

export default page;
