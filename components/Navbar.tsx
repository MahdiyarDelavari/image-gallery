import React from "react";
import Link from "next/link";
import Searchbar from "./Searchbar";

const Navbar = () => {
	return (
		<header className="top-0 z-10 sticky bg-gray-900">
			<nav className="flex flex-col sm:flex-row gap-4 sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
				<h1>
					<Link href="/" className="font-bold text-2xl">
						MeowGallery
					</Link>
                </h1>
                <Searchbar/>
			</nav>
		</header>
	);
};

export default Navbar;
