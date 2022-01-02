import { Router, useRouter } from 'next/dist/client/router';
import Image from 'next/image';

function CardView({id,title,imageUrl}) {

    const router = useRouter();

    const navigateToRes = () =>{
        router.push(
            {
                pathname:('/results'),
                query:{
                    searchKey : title
                }
            }
        )  
    }

    return (
            <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
                        hover:bg-purple-400 hover:scale-105 transition transform duration-200
                        ease-out"
                onClick={navigateToRes}            
            >
            <div className="relative h-16 w-16">
                <Image
                    src={imageUrl}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div>
                <h2> {title} </h2>
            </div>
        </div>
    )
}

export default CardView
