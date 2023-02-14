import { Groomsman } from '../../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="flex p-4">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <div
            className="shadow-md flex items-center p-4 m-4 hover:bg-purple"
            key={groomsman.id}
          >
            {groomsman.slug}
          </div>
        )
      })}
    </div>
  )
}
