import React, {useState,useEffect} from 'react'
import BookCards from '../components/BookCards'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { db} from './Firebase'
import { onSnapshot, collection, query, where } from "firebase/firestore";


export default function saved() {
    const [books,setBooks] = useState([])

    const q = query(collection(db, "savedBooks"))
    onSnapshot(q, (querySnapshot) => {
        setBooks(querySnapshot.docs)
    })
    console.log(books)

  return (
    <div>
    <Header/>
        <main>
        <div className="text-center text-2xl font-mono">
                <h1 className="text-red-700"> Your saved Books </h1>
            </div>
        <section>
            <div className='flex flex-col'>
            {
                books.map((book) =>{
                    <BookCards
                    key={book.student_id}
                    props={book}
                    />
                })
            }
            </div>
        </section>
        </main>
    <Footer/>
    </div>
  )
}