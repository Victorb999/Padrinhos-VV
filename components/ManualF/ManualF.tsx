/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
export default function ManualF() {
  return (
    <div className="w-full md:p-12">
      <h1 className="text-center font-cursive font-bold text-white tracking-wider text-3xl mb-2">
        Manual da madrinha
      </h1>
      <p  className="font-serif font-bold text-dark tracking-wider">
        Queremos que você se sinta elegante e confortável, por isso, 
        ninguém melhor que você para escolher o modelo do vestido que mais te 
        agrade desde que seja longo.
      </p>
      <p  className="font-serif font-bold text-dark tracking-wider mb-4">
        Escolhemos a cor Lavanda e optamos por definir uma paleta com muito 
        carinho para que você escolha o seu tom preferido e arrase!
      </p>
      <div className="w-full md:flex md:justify-center md:flex-col md:items-center">
        <img src={'/assets/madrinhas-1.jpg'} className="w-64 md:w-128 rounded"/>
        <h1 className="text-center font-serif font-bold text-white tracking-wider text-xl my-4">
          Palheta
        </h1>
        <div className="flex flex-row flex-wrap justify-center mt-4">
          <div className="md:h-24 md:w-24 h-16 w-16 bg-purple"></div>
          <div className="md:h-24 md:w-24 h-16 w-16 bg-lavanda-1"></div>
          <div className="md:h-24 md:w-24 h-16 w-16 bg-lavanda-2"></div>
          <div className="md:h-24 md:w-24 h-16 w-16 bg-lavanda-3"></div>
          <div className="md:h-24 md:w-24 h-16 w-16 bg-purple-400"></div>
          <div className="md:h-24 md:w-24 h-16 w-16 bg-lavanda-4"></div>
        </div>
      </div>
    </div>
  )
}
