import Link from 'next/link'
import { Groomsman, Member } from '../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <>
      <h1 className="font-serif font-bold text-gray tracking-wider text-4xl mt-4">
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
            rounded-lg shadow-lg shadow-black
            bg-gradient-to-br	from-purple-600 to-purple-700
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
                      <span className="font-cursive font-bold text-gray tracking-wider text-3xl">
                        {member.nickName}
                      </span>
                      <span className="font-cursive font-bold text-gray tracking-wider text-2xl">
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
    </>
  )
}
