/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import path from 'path'
import { promises as fs } from 'fs'
import { Groomsman, Member } from '../../services/types'
import CardParallax from '../../components/card/cardParallax'
import ManualF from '../../components/ManualF/ManualF'
import ManualM from '../../components/ManualM/ManualM'
import SaveDate from '../../components/SaveDate/SaveDate'
import FinalMessage from '../../components/FinalMessage/FinalMessage'
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
    <div className="flex flex-col justify-center items-center w-full p-12">
      <h1 className="font-serif text-center font-bold text-dark tracking-wider text-2xl mt-4">
        Obrigado por aceitar esse convite tão especial! :)
      </h1>

      <div className="flex sm:flex-row flex-col justify-center gap-16 p-4">
        {groomsmenFiltered?.members?.map((member: Member) => {
          return (
            <CardParallax key={member.id} className={'w-64 h-78'}>
              <div
                className="w-full h-full holographic-effect
                          flex flex-col justify-center items-center gap-2
                          bg-dark border-4 border-dark
                          rounded-lg text-center text-white text-opacity-70"
              >
                <img
                  className="w-full h-64"
                  alt={member.name}
                  src={`/padrinhos/${member.id}.jpg`}
                />

                <h1 className="font-cursive font-bold text-white tracking-wider text-3xl mb-2">
                  {member.name}
                </h1>
              </div>
            </CardParallax>
          )
        })}
      </div>

      <div className="flex flex-col justify-center gap-16 p-4">
        <SaveDate />
      </div>

      <div className="flex md:flex-row flex-col gap-16 justify-center p-4">
        {groomsmenFiltered?.members?.map((member: Member) => {
          if(member.sex === 'F'){
            return (
              <div key={member.sex+ member.id} className="md:w-1/2">
                <ManualF />
              </div>
            )
          }
          if(member.sex === 'M'){
            return (
              <div key={member.sex+ member.id} className="md:w-1/2">
                <ManualM />
              </div>
            )
          }
          return (<></>)
        })}
      </div>

      <div className="flex flex-col justify-center gap-16 p-4">
        <FinalMessage />
      </div>

    </div>
  )
}
