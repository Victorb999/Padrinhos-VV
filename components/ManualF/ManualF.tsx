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
      <div className="w-full flex justify-center flex-col items-center">
        <img src={'/assets/madrinhas-1.jpg'} className="w-64 md:w-128 rounded"/>
        <h1 className="text-center font-serif font-bold text-white tracking-wider text-xl my-4">
          Paleta
        </h1>
        <div className="flex flex-row flex-wrap justify-center mt-4">          
          <img className="md:h-24 md:w-24 h-16 w-16" src={'/assets/colors/lavander-2.svg'} /> 
          <img className="md:h-24 md:w-24 h-16 w-16" src={'/assets/colors/lavander-3.svg'} />
          <img className="md:h-24 md:w-24 h-16 w-16" src={'/assets/colors/lavander-4.svg'} />
          <img className="md:h-24 md:w-24 h-16 w-16" src={'/assets/colors/lavander-5.svg'} />
          <img className="md:h-24 md:w-24 h-16 w-16" src={'/assets/colors/lavander-6.svg'} />
        </div>
      </div>
    </div>
  )
}
