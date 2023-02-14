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

  const groomsmenFiltered = groomsmen[0]

  return (
    <div className="p-4 flex flex-col">
      <h1 className="font-serif font-bold text-dark tracking-wider text-xl">
        {groomsmenFiltered.slug}
      </h1>
      {groomsmenFiltered?.members?.map((member: Member) => {
        return (
          <div key={member.id}>
            <img src={member.image} />
            <h1 className="font-cursive font-bold text-dark tracking-wider text-xl">
              {member.nickName}
            </h1>
          </div>
        )
      })}
    </div>
  )
}
