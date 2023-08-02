const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();
  
  return (
    <>
        <footer className="w-full h-[100px] bg-sky-700 text-xl flex flex-row-reverse justify-between items-center px-5">
            <h1 className="text-xl text-white font-bold animate-wiggle">Premier League ⚽</h1>
            <p className="text-white">Todos los derechos reservados © {year}</p>
        </footer>
    </>
  )
}

export default Footer