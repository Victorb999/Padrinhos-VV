import QRCode from 'react-qr-code'
import { getPadrinhos } from '../../services/getPadrinhos'
import { Groomsman, Member } from '../../services/types'
import Link from 'next/link'

export default async function Page() {
  const data = await getPadrinhos()
  return (
    <div className="flex flex-wrap gap-4 flex justify-center items-center mt-4 p-4">
      {data?.groomsmen.map((groomsman: Groomsman) => {
        return (
          <div
            className="flex flex-col justify-center items-center bg-white"
            key={groomsman.id}
          >
            <QRCode
              size={400}
              style={{ border: '5px solid #fff' }}
              value={`https://padrinhos-vv.vercel.app/${groomsman.slug}`}
              viewBox={`0 0 300 400`}
            />
            <Link
              href={`/${groomsman.slug}`}
              className="font-serif font-bold text-dark tracking-wider text-sm m-2"
            >
              {`https://padrinhos-vv.vercel.app/${groomsman.slug}`}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
