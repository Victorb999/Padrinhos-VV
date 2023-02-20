import path from 'path'
import { promises as fs } from 'fs'
import { Groomsman, Member } from '../../services/types'
import CardParallax from '../../components/card/cardParallax'
interface PageProps {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  const jsonDirectory = path.join(process.cwd(), 'json')
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + '/groomsmen.json',
    'utf8'
  )
  //Return the content of the data file in json format

  const groomsmen = JSON.parse(fileContents).groomsmen.filter(
    (groom: Groomsman) => groom.slug === params.slug
  )

  if (groomsmen.length === 0) {
    return (
      <div className="p-4 w-full flex justify-center">
        <h1 className="text-xl font-serif text-dark">
          Ops, não encontramos esse padrinho.
        </h1>
      </div>
    )
  }

  const groomsmenFiltered = groomsmen[0]

  return (
    <div className="flex flex-col justify-center items-center w-full p-4">
      <h1 className="font-serif font-bold text-body tracking-wider text-4xl mt-4">
        Padrinhos
      </h1>

      <div className="flex sm:flex-row flex-col justify-center  gap-16  p-4">
        {groomsmenFiltered?.members?.map((member: Member) => {
          return (
            <CardParallax key={member.id} className={'w-64 h-72'}>
              <div
                className="w-full h-full
                flex flex-col justify-center items-center gap-4
                bg-gray-3 border-4 border-purple-light
                rounded-lg p-4 text-center text-white text-opacity-70"
              >
                <img
                  alt={member.name}
                  src={`/padrinhos/${member.id}.jpg`}
                />

                <h1 className="font-cursive font-bold text-white tracking-wider text-4xl">
                  {member.name}
                </h1>
              </div>
            </CardParallax>
          )
        })}
      </div>
    </div>
  )
}
