import Link from "next/link";

type Props = {
	topic: string;
	page?: string | undefined;
	prevPage?: string | null;
	nextPage?: string | null;
};

const Footer = ({ topic, page, nextPage, prevPage } : Props) => {
	if (!prevPage && !nextPage) return null;

	const PageNums = [];
	if (prevPage && nextPage) {
		for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
			PageNums.push(i);
		}
	}
const nextPageArea = nextPage ? (
	<Link
		href={`/results/${topic}/${nextPage}`}
		className="px-4 py-2 rounded-lg bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition-all flex items-center gap-2"
	>
		<span className="material-icons text-lg"></span>
		Next
	</Link>
) : null;
const prevPageArea = prevPage ? (
	<div className="flex items-center gap-2">
		<Link
			href={`/results/${topic}/${prevPage}`}
			className="px-4 py-2 rounded-lg bg-indigo-500 text-white font-semibold shadow hover:bg-indigo-600 transition-all flex items-center gap-2"
		>
			<span className="material-icons text-lg"></span>
			Previous
		</Link>
		{PageNums.map((num, i) => (
			page && num === parseInt(page) ? <span className="bg-blue-900 text-white px-3 py-1 rounded-lg font-bold shadow" key={i}>{num}</span>
				: (
					<Link
						key={i}
						href={`/results/${topic}/${num}`}
						className="px-3 py-1 rounded-lg bg-white/70 text-indigo-700 font-bold shadow hover:bg-white transition-all"
					>
						{num}
					</Link>
				)
		))}
	</div>
) : null;

	return (
		<footer className="my-8 px-8 py-5 rounded-2xl shadow-xl bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 flex justify-between items-center max-w-[430px] mx-auto border border-white/30">
			<div className="flex items-center gap-4">
				{prevPageArea}
			</div>
			<div className="flex items-center gap-4">
				{nextPageArea}
			</div>
		</footer>
	);
};

export default Footer;
