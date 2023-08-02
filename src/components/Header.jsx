import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
        <header className="w-full h-[100px] bg-sky-700 text-xl flex justify-between items-center px-5">
            <h1 className="text-2xl text-white font-bold animate-wiggle">Premier League ⚽</h1>
            <nav>
                <Link 
                    to="/"
                    className="px-5 text-white transition-all hover:text-slate-300"
                >Inicio</Link>
                <Link 
                    to="/standing"
                    className="px-5 text-white transition-all hover:text-slate-300"
                >Posiciones</Link>
            </nav>
        </header>
    </>
  )
}

export default Header