import {SearchIcon} from '@heroicons/react/solid';
import {useState} from 'react';
import { useRouter } from 'next/dist/client/router';

function SearchBar({searchPlaceHolder}) {

    const router = useRouter();

    const [searchInput, setSearchInput] = useState("");

    const searchFunc = () =>{
        router.push({
            pathname: '/results',
            query: {
                searchKey: searchInput,
            }
        });
    }

    return (
        <div className="grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
        <div>

        </div>
        {/* Middle component */}
        <div className="flex items-ceter md:border-2 rounded-full py-2
        ">
            <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="placeholder-gray-600 flex-grow pl-5 bg-trasnparent outline-none text-black"
                type="text"
                placeholder={searchPlaceHolder || "Search here !!"}
            />
            <SearchIcon 
                className="mr-3 hidden md:inline-flex h-8 bg-purple-700 text-white rounded-full p-1 cursor-pointer
                hover:bg-red-300"
                onClick={searchFunc}
            />
        </div>
        <div>

        </div>
        </div>
    )
}

export default SearchBar
