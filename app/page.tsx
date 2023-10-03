import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title:'Home 🏠'
}

export default function Home() {
  return (
    <>
      <Navbar/>

      <div className="text-center m-8 flex flex-col justify-center items-center">
        <b className="text-white text-3xl mb-8">Dc App!</b>
        <img src="https://staticg.sportskeeda.com/editor/2023/06/c0bda-16863425342545-1920.jpg?w=840" className="object-cover" />
      </div>
{/* 
      <Footer/> */}
    </>
  )
}
