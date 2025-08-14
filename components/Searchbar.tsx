"use client";

import { useRouter } from "next/navigation";
import { useState,FormEvent } from "react";

const Searchbar = () => {
	const [search, setSearch] = useState("");
    const router = useRouter();
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/results/${search}`)
        setSearch('')
    }
	return (
		<form className="flex items-center" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Search..."
                className="px-4 py-2 rounded-l-md border-none outline-none text-black w-48 bg-blue-50 "
                onChange={(e) => setSearch(e.target.value)}
                value={search}
			/>
			<button type="submit"  className="px-4 py-2 rounded-r-md bg-pink-500 text-white font-bold hover:bg-pink-600 transition-colors">
				Search
			</button>
		</form>
	);
};

export default Searchbar;
