import path from 'path'
import { promises as fs } from 'fs'
import { Groomsman, Member } from '../../services/types'
import { Card } from '../../components/card/card'
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
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="p-4 flex flex-row justify-center">
        {groomsmenFiltered?.members?.map((member: Member) => {
          return (
            <Card
              key={member.id}
              image={`https://ui-avatars.com/api/?name=${member.name}&background=0F1923&color=B5A5D1&rounded=true&format=svg`}
              name={member.nickName}
            />
          )
        })}
      </div>
    </div>
  )
}
