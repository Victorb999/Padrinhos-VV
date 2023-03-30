/* espnt-disable pnebreak-style */
/* espnt-disable react/react-in-jsx-scope */

//import CardParallax from '../card/cardParallax'

// TODO : add map
export default function SaveDate() {
  return (

    <div
      className="flex flex-col justify-center items-center gap-2
        card-glass rounded
        hover:opacity-75 transition
        transform hover:-translate-y-1 transition duration-300 p-4"
    >
      <h1 className="text-center font-cursive font-bold 
      text-white tracking-wider text-3xl my-2">
          Save the date
      </h1>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <img src={'/assets/calendario.jpg'} className="w-52 md:w-64 rounded mb-4" />
        <div>
          <p className="font-serif text-center font-bold text-white text-2xl tracking-wider">
          Vila Auguri
          </p>
          <p className="font-serif text-center text-white tracking-wider p-2 md:w-64">
        📌Av. Prof. Clóvis Salgado, 605 - Bandeirantes (Pampulha), Belo Horizonte - MG
          </p>
          <p className="font-serif text-center text-white tracking-wider mb-4">
        🕓 Horário: 16:00
          </p>
        </div>
      </div>
    </div>
  )
}
