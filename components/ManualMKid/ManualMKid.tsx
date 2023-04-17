/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
export default function ManualMKid() {
  return (
    <div className="w-full md:p-12">
      <h1 className="text-center font-cursive font-bold text-white tracking-wider text-3xl mb-2">
        Manual do pajem
      </h1>
      <p className="font-serif font-bold text-dark tracking-wider mb-4">
        Sabemos que ficará lindo de qualquer forma! Porém, adoraríamos vê-lo de blusa social branca, bermuda, suspensório e gravata borboleta.
      </p>

      <div className="w-full flex justify-center flex-col items-center">
        <img src={'/assets/kid.jpg'} className="w-64 md:w-128 rounded"/>
      </div>
    </div>
  )
}
