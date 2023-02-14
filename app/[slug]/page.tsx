import path from 'path'
import { promises as fs } from 'fs'
import { Groomsman, Member } from '../../services/types'
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
    return <div>Padrinho não encontrado</div>
  }

  const groomsmenFiltered = groomsmen[0]

  return (
    <div className="p-4 flex flex-col">
      <h1 className="font-serif font-bold text-dark tracking-wider text-xl">
        {groomsmenFiltered.slug}
      </h1>
      <div className="p-4 flex flex-row">
        {groomsmenFiltered?.members?.map((member: Member) => {
          return (
            <div key={member.id} className="p-4">
              <img
                src={`https://ui-avatars.com/api/?name=${member.name}&background=0F1923&color=B5A5D1&rounded=true&format=svg`}
              />
              <h1 className="font-cursive font-bold text-dark tracking-wider text-xl">
                {member.nickName}
              </h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}
