import Link from 'next/link'
import { Groomsman } from '../../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex flex-wrap  p-4">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <div
            className="shadow-md flexitems-center p-4 m-4 hover:bg-purple"
            key={groomsman.id}
          >
            <Link href={`/${groomsman.slug}`}>{groomsman.slug}</Link>
          </div>
        )
      })}
    </div>
  )
}
