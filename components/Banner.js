import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';

function Banner() {

    const router = useRouter();
    
    const navigateToRes = () =>{
        router.push(
            {
                pathname:'/results',
                query:{
                    searchKey:'Latest'
                }
            }
        );
    }

    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] items-center">
            <Image
                src="https://www.nyit.edu/files/long_island/Location_OW_ClubsAndOrganizations_Hero.jpg"
                layout="fill"
                objectFit="cover"
                onClick={() => router.push('/')}
            />
            <div className="relative top-1/2 w-full text-center">
              <button onClick={navigateToRes} className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold
                    my-3 hover:shadow-xl hover:bg-red-300"> Not sure what to read? Perfect </button>
            </div>
        </div>
    )
}

export default Banner
