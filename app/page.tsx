import Link from 'next/link'
import { Groomsman } from '../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex flex-wrap p-2">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <Link
            className="shadow-md flexitems-center p-4 m-4 h-36 w-36 hover:bg-purple"
            key={groomsman.id}
            href={`/${groomsman.slug}`}
          >
            {groomsman.slug}
          </Link>
        )
      })}
    </div>
  )
}
