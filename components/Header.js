import Image from 'next/image';
import {MenuIcon, UserCircleIcon} from "@heroicons/react/solid";
import { useRouter } from 'next/dist/client/router';

function Header() {

    const router = useRouter();
    
    const navigateToSaved = () =>{
        router.push(
            {
                pathname:'/saved'
            }
        );
    }

    return (
        <header className='sticky top-0 bg-white shadow-md p-5 md:px-10 z-50 grid grid-cols-3'>
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://thumbs.dreamstime.com/z/open-book-icon-logo-vector-education-icon-logo-open-book-icon-logo-vector-illustration-isolated-o-nwhite-background-140097853.jpg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            <div className="text-center text-2xl font-mono">
                <h1 className="text-red-700"> Library Database </h1>
            </div>

            <div className="flex items-center space-x4 justify-end text-gray-500">
                <p> Search all the books here!!</p>
                <div className="flex items-center space-x8 border-2 p-2 rounded-full mx-4" onClick={navigateToSaved}>
                    <MenuIcon className="h-6 cursor-pointer"/>
                    <UserCircleIcon className="h-6 cursor-pointer"/>
                </div>
            </div>

        </header>
    )
}

export default Header
