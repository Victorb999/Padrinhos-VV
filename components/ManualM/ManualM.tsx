/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
export default function ManualM() {
  return (
    <div className="w-full md:p-12">
      <h1 className="text-center font-cursive font-bold text-white tracking-wider text-3xl mb-2">
        Manual do padrinho
      </h1>
      <p className="font-serif font-bold text-dark tracking-wider">
        Gostaríamos que usasse terno preto com camisa branca. 
        Quanto a gravata que tal combinar com o vestido da madrinha?!   
      </p>
      <p className="font-serif font-bold text-dark tracking-wider">
        Pensando nisso, escolhemos uma pra você!
      </p>
      <p className="font-serif font-bold text-dark tracking-wider mb-4">
        Espero que goste do presente!
      </p>
      <div className="w-full flex justify-center flex-col items-center">
        <img src={'/assets/padrinhos-1.jpg'} className="w-64 md:w-128 rounded"/>
      </div>
    </div>
  )
}
