import Link from 'next/link'
import { Groomsman, Member } from '../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-serif font-bold text-body tracking-wider text-4xl mt-4">
        Padrinhos
      </h1>
      <div className="flex flex-wrap gap-2 flex justify-center items-center mt-4">
        {data?.groomsmen.map((groomsman: Groomsman) => {
          return (
            <Link
              href={`/${groomsman.slug}`}
              className="
            flex flex-col justify-center items-center 
            gap-4 p-2 m-2 
            rounded shadow-lg shadow-black
            bg-gradient-to-br	from-purple-light to-purple-400
            w-36 h-36 
            hover:opacity-75 transition
            transform hover:-translate-y-1 transition duration-300
            "
              key={groomsman.id}
            >
              <div className="flex flex-col justify-center items-center">
                {groomsman.members?.map((member: Member, index) => {
                  return (
                    <div
                      key={member.id}
                      className="flex flex-col justify-center items-center"
                    >
                      <span className="font-serif font-bold text-gray tracking-wider text-xl">
                        {member.nickName}
                      </span>
                      <span className="font-serif font-bold text-gray tracking-wider text-lg">
                        {groomsman.members.length > 1 && index === 0 && ' &'}
                      </span>
                    </div>
                  )
                })}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
