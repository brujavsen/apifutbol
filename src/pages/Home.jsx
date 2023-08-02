import { useState } from "react"
import Modal from "../components/Modal";
import useFetch from "../hooks/UseFetch";
import PropagateLoader from "react-spinners/PropagateLoader"

const Home = () => {
    const urls = ['response.json'];
    const {data, loading} = useFetch(urls);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [number, setNumber] = useState(0);

    const handleOpenModal = (id) => {
        setIsModalOpen(true);
        setNumber(id);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    if(loading) {
        return <PropagateLoader className="text-center my-10" color="hsla(319, 67%, 53%, 1)" />
    }


  return (
    <>
        <main className="h-min-screen">
            <h1 className="text-4xl bg-purple-900 text-white font-bold text-center py-3 shadow">Partidos de la Premier League <br /> <span className="text-xl text-purple-300 font-medium">{"(28/05/2023)"}</span></h1>
            {data[0] ? 
                <div className="flex flex-col bg-purple-300 justify-center items-center">
                    <img className="w-[200px]" src={data[0].competition.emblem} alt="logo premier" />
                </div>
                :
                null
            }
            {data[0] ? 
            data[0].matches.map((match, index)=> (
                <div className="container flex flex-col md:flex-row justify-center w-[80%] xl:w-[60%] items-center mx-auto my-5 p-5 rounded bg-purple-300" key={match.id}>
                    <div className="flex flex-col justify-center items-center w-[80%] md:w-full md:flex-row">
                        <div className="w-full">
                            <h2 className="text-center font-bold">{match.homeTeam.name}</h2>
                            <img className="w-[70px] mx-auto" src={match.homeTeam.crest} alt="logo team" />
                        </div>
                        <div className="flex flex-col items-center justify-center my-5 w-full">
                            <h3 className="font-bold text-xl text-center">VS.</h3>
                            <small className="text-center">Fecha: <span className="font-bold">{match.utcDate}</span></small>
                        </div>
                        <div className="w-full">
                            <h2 className="text-center font-bold">{match.awayTeam.name}</h2>
                            <img className="w-[60px] mx-auto" src={match.awayTeam.crest} alt="logo team" />
                        </div>
                    </div>
                    <input type="button" className="my-5 mb-0 py-1 px-9 bg-lime-600 hover:bg-lime-500 cursor-pointer text-white rounded-md" value="Estadística" onClick={function() {handleOpenModal(index)}}/>
                </div>
            )):
                null
            }
            {data[0] ? (
                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center items-center mb-2 p-2 bg-purple-900 rounded-md text-white w-full">
                            <div className="flex flex-col">
                                <div className="flex justify-center items-center">
                                    <div className="flex flex-col items-center">
                                        <h3>{data[0].matches[number].homeTeam.tla}</h3>
                                        <img className="w-[60px]" src={data[0].matches[number].homeTeam.crest} alt="image" />
                                    </div>
                                    <div className="flex flex-col items-center w-[150px]">
                                        <h3 className="text-center font-bold text-white text-xl">Resultado:</h3>
                                        <div className="flex text-xl">
                                            <p className="px-5 text-4xl">{`${data[0].matches[number].score.fullTime.home}`}</p>
                                            <p>{"-"}</p>
                                            <p className="px-5 text-4xl">{`${data[0].matches[number].score.fullTime.away}`}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3>{data[0].matches[number].awayTeam.tla}</h3>
                                        <img className="w-[60px]" src={data[0].matches[number].awayTeam.crest} alt="image" />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center pt-3">
                                    <p className="text-center text-slate-200 mt-2 text-md w-fit px-4 mx-auto font-bold border-r-2">Duración: <span className="font-normal">{data[0].matches[number].score.duration}</span></p>
                                    <p className="text-center text-slate-200 mt-2 text-md w-fit px-4 mx-auto font-bold border-r-2">Estado: {""}
                                    <span className="font-normal">{
                                        data[0].matches[number].status === 'FINISHED'? 'Finalizado': 
                                        data[0].matches[number].status === 'TIMED'? 'Programada':
                                        data[0].matches[number].status === 'AWAY_TEAM'?data[0].matches[number].awayTeam.name:
                                        ''
                                    }</span>
                                    </p>
                                    <p className="text-center text-slate-200 mt-2 text-md w-fit px-4 mx-auto font-bold">Árbitro: <span className="font-normal">{data[0].matches[number].referees[0]?.name}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 rounded-md">
                            <div className="rounded-md m-1 p-1 md:col-span-3">
                                <p className="text-center text-2xl text-slate-200 bg-indigo-500 rounded-md mb-2">Ganador:</p>
                                <p className="text-center font-light text-4xl">{
                                    data[0].matches[number].score.winner === 'DRAW'? 'Empate': 
                                    data[0].matches[number].score.winner === 'HOME_TEAM'? data[0].matches[number].homeTeam.name:
                                    data[0].matches[number].score.winner === 'AWAY_TEAM'?data[0].matches[number].awayTeam.name:
                                    ''
                                }</p>
                            </div>
                        </div>
                    </div>
                </Modal>
                ): null
            }
        </main>
    </>
  )
}

export default Home