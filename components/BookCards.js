import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import { db } from "../pages/Firebase"
import {collection,addDoc} from "firebase/firestore"

function BookCards({props}) {

    const bookCollection = collection(db,"savedBooks")

    const saveBook = async() =>{
        await addDoc(bookCollection,{previewLink: props.volumeInfo.previewLink,
                                     bookId:props.id,
                                     image_url: props.volumeInfo.imageLinks.thumbnail,
                                     book_title: props.volumeInfo.title,
                                     subtitle: props.volumeInfo.subtitle,
                                     rating: props.volumeInfo.averageRating,
                                     authors: props.volumeInfo.authors,
                                     publisher: props.volumeInfo.publisher,
                                     published_date: props.volumeInfo.publishedDate,
                                     page_count: props.volumeInfo.pageCount,
                                     print_type: props.volumeInfo.printType,
                                     language: props.volumeInfo.language
                                     })
    }

    return (
        <div className="flex ml-5 m-2 px-2 pr-4 py-7 hover:shadow-lg cursor-pointer bg-gray-100 rounded-lg border-b
                        hover:bg-opacity-80 transition duration-200 ease-out
                        first:border-t" 
         >
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <a href={props.volumeInfo.previewLink}>
                <img
                    alt={props.id}
                    src={props.volumeInfo.imageLinks.thumbnail || ""}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
                </a>
            </div>
            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p> Book Id: {props.id}</p>
                    <HeartIcon className="h-7 cursor-pointer"
                               onClick={saveBook}
                    />
                </div>
                <h4 className="text-lg font-semibold pb-2 pr-1 lg:text-2xl">Title: {props.volumeInfo.title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">Context: {props.volumeInfo.subtitle}</p>
                <div className="flex justify-between">
                    <p className="items-center flex text-xl">
                        Ratings: 
                        <StarIcon
                            className="h-8 text-red-300"
                        /> 
                        {props.volumeInfo.averageRating}
                    </p>
                    </div>
                <div className="flex justify-between">
                    <div>
                        <p className="text-xl">Authors: {props.volumeInfo.authors}</p>
                        <p className="text-right pr-1 font-extralight">Publishers: {props.volumeInfo.publisher}</p>
                        <p className="text-right pr-1 font-extralight">Date Published: {props.volumeInfo.publishedDate}</p>
                    </div>
                </div>
            </div>
            <div className="mt-40">
            <p > Page count: {props.volumeInfo.pageCount}</p>
            <p> Print type:  {props.volumeInfo.printType}</p>
            <p> Language:  {props.volumeInfo.language}</p>
            </div>
        </div>
    )
}

export default BookCards
