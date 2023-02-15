//import CardAnimated from 'react-animated-3d-card'
interface CardProps {
  name: string
  image: string
}

export const Card = ({ name, image }: CardProps): JSX.Element => {
  return (
    <div
      className="
      flex flex-col justify-center items-center 
      gap-4 p-2 m-2 
      rounded border-4 border-purple-500 shadow-lg shadow-black
      bg-gradient-to-br	 from-purple-600 to-purple-light
      w-32 h-40
      "
    >
      <img src={image} />
      <h1 className="font-cursive font-bold text-dark tracking-wider text-xl">
        {name}
      </h1>
    </div>
  )
}
