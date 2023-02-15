import Link from 'next/link'
import { Groomsman, Member } from '../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex flex-wrap gap-2 flex justify-center items-center">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <Link
            className="
            flex flex-col justify-center items-center 
            gap-4 p-2 m-2 
            rounded border-4 border-purple-light shadow-lg shadow-black
            bg-gradient-to-br	from-gray-light to-purple-light
            w-36 h-36
            "
            key={groomsman.id}
            href={`/${groomsman.slug}`}
          >
            <div className="flex flex-col justify-center items-center">
              {groomsman.members?.map((member: Member) => {
                return (
                  <span className="font-cursive font-bold text-dark tracking-wider text-xl">
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
