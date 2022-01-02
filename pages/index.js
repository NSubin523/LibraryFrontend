import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import CardView from '../components/CardView'
import Footer from '../components/Footer'

export default function Home({getCategoriesData}) {
  return (
    <div className="">
      <Head>
        <title>Library Frontend</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>
      <SearchBar/>
      <main className="max-w-7xl mx-auto sm:px-16">
      <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 pt-1">Explore Categories</h2>
          <div className="bg-gray-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-xl">
          {getCategoriesData?.map(({id,title,imageUrl}) => (
            <CardView key={id} imageUrl={imageUrl} title={title}/>
          ))}
          </div>
          </section>
      </main>
      <Footer/>
    </div>
  )
}
export async function getStaticProps(){
  const getCategoriesData = await fetch("http://localhost:8080/classifications").then((res) => res.json());
  
  return {
    props:{
      getCategoriesData
    }
  }
}
