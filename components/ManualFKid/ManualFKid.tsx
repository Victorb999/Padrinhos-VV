/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
export default function ManualFKid() {
  return (
    <div className="w-full md:p-12">
      <h1 className="text-center font-cursive font-bold text-white tracking-wider text-3xl mb-2">
        Manual da daminha
      </h1>

      <p  className="font-serif font-bold text-dark tracking-wider mb-4">
      Para que fique mais linda nesse dia especial, gostaríamos que usasse um vestido da cor verde ou rosa.
      </p>

      <div className="w-full flex justify-center flex-col items-center">
        <img src={'/assets/kidF.jpg'} className="w-64 md:w-128 rounded"/>
      </div>
    </div>
  )
}
