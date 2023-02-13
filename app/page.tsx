import { Groomsman } from '../../services/types'
import { getPadrinhos } from '../services/getPadrinhos'

export default async function IndexPage() {
  const data = await getPadrinhos()

  return (
    <div className="p-4">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <div
            className="shadow-md flex flex-col items-center space-x-4 p-4"
            key={groomsman.id}
          >
            {groomsman.slug}
          </div>
        )
      })}
    </div>
  )
}
