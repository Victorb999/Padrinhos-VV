import Link from 'next/link'
import { Groomsman, Member } from '../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex flex-wrap gap-2 flex justify-center items-center mt-4">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <Link
            href={`/${groomsman.slug}`}
            className="
            flex flex-col justify-center items-center 
            gap-4 p-2 m-2 
            rounded border-4 border-purple-500 shadow-lg shadow-black
            bg-gradient-to-br	from-purple-600 to-purple-light
            w-36 h-36 
            hover:opacity-75 transition
            transform hover:-translate-y-1 transition duration-300
            "
            key={groomsman.id}
          >
            <div className="flex flex-col justify-center items-center">
              {groomsman.members?.map((member: Member) => {
                return (
                  <span
                    key={member.id}
                    className="font-cursive font-bold text-dark tracking-wider text-3xl"
                  >
                    {member.nickName}
                  </span>
                )
              })}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
