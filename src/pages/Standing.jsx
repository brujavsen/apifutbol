import useFetch from "../hooks/UseFetch";
import PropagateLoader from "react-spinners/PropagateLoader"

const Standing = () => {

    const urls = ['standing.json'];
    const {data, loading} = useFetch(urls);

    if(loading) {
        return <PropagateLoader className="text-center my-10" color="hsla(319, 67%, 53%, 1)" />
    }

  return (
    <>
        <main className="h-min-screen">
            <h1 className="text-4xl bg-purple-900 text-white font-bold text-center py-3 shadow">Posiciones de la Premier League <br /> <span className="text-xl text-purple-300 font-medium">{"(Temporada 2022/2023)"}</span></h1>
            {data[0] ? 
                <div className="flex flex-col bg-purple-300 justify-center items-center">
                    <img className="w-[200px]" src={data[0].competition.emblem} alt="logo premier" />
                </div>
                :
                null
            }
            <table className="w-full lg:w-1/2 mx-auto text-xl">
              <thead className="w-full table-header-group">
                <tr className="w-full table-row text-white font-bold bg-purple-500">
                  <td className="table-cell">
                    Pos
                  </td>
                  <td className="table-cell">
                    Equipo
                  </td>
                  <td className="table-cell">
                    PJ
                  </td>
                  <td className="table-cell">
                    G
                  </td>
                  <td className="table-cell">
                    E
                  </td>
                  <td className="table-cell">
                    P
                  </td>
                  <td className="table-cell">
                    GF
                  </td>
                  <td className="table-cell">
                    GC
                  </td>
                  <td className="table-cell">
                    DG
                  </td>
                  <td className="table-cell">
                    Pts
                  </td>
                </tr>
              </thead>
              <tbody className="w-full table-row-group text-sm md:text-xl">
                {data[0] ? 
                  data[0].standings[0].table.map((position)=> (
                    <tr className={`table-row ${position.position <= 4 ? 'bg-lime-400': position.position >= 18 ? 'bg-red-500': 'bg-slate-300'}`} key={position.team.id}>
                        
                        <td className="table-cell text-white bg-slate-500 p-1 text-center">
                          {position.position}
                        </td>
                        <td className="table-cell text-center">
                          <div className="flex items-center text-sm md:text-xl">
                            <img className="w-[20px] h-[20px] mx-2" src={position.team.crest} alt="team image" />
                            {position.team.shortName}
                          </div>
                        </td>
                        <td className="table-cell">
                          {position.playedGames}
                        </td>
                        <td className="table-cell">
                          {position.won}
                        </td>
                        <td className="table-cell">
                          {position.draw}
                        </td>
                        <td className="table-cell">
                          {position.lost}
                        </td>
                        <td className="table-cell">
                          {position.goalsFor}
                        </td>
                        <td className="table-cell">
                          {position.goalsAgainst}
                        </td>
                        <td className="table-cell">
                          {position.goalDifference}
                        </td>
                        <td className="table-cell">
                          {position.points}
                        </td>
                    </tr>
              
                  )):
                      null
                  }
              </tbody>
            </table>
        </main>
    </>
  )
}

export default Standing