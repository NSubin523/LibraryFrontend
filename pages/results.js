import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"

import { useRouter } from "next/dist/client/router";
import axios from "axios";
import BookCards from "../components/BookCards";

function Results() {

    const router = useRouter();

    const [apiKey, setAPIKey] = useState("AIzaSyAqjBzKh_-ci4VrS7O78i8jRxNFZjrzF-I");

    const[books,setBooks] = useState([]);

    const {searchKey} = router.query;

    const fetchBookData = () =>{
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+searchKey+"&key="+apiKey+"&maxResults=40")
            .then((res)=>{
                console.log(res.data.items);
                setBooks(res.data.items);
                
            }).catch((err)=>{
                console.log(err);
            })
    }

    return (
        <div>
            <Header/>
            <SearchBar searchPlaceHolder={searchKey}/>
            <button onClick={fetchBookData} className="bg-red"> .... </button>
            <main className="flex">
            <section>
            <div className="flex flex-col">
                {books.map((book)=>(
                     <BookCards
                     key={book.id}
                     props={book}
                 />
                ))}
            </div>
            </section>
            </main>

            <Footer/>
        </div>
    )
}



export default Results
