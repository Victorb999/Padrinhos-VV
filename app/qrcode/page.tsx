import QRCode from 'react-qr-code'
import { getPadrinhos, getPajem } from '../../services/getPadrinhos'
import { Groomsman, Kid } from '../../services/types'
import Link from 'next/link'

export default async function Page() {
  const data = await getPadrinhos()
  const kids = await getPajem()
  return (
    <>
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
                viewBox={'0 0 300 400'}
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
      <h1 className="text-center font-cursive font-bold text-white tracking-wider text-3xl mb-2">
        Kids
      </h1>
      <div className="flex flex-wrap gap-4 flex justify-center items-center mt-4 p-4">
        {kids?.kids.map((kid: Kid) => {
          return (
            <div
              className="flex flex-col justify-center items-center bg-white"
              key={kid.id}
            >
              <QRCode
                size={400}
                style={{ border: '5px solid #fff' }}
                value={`https://padrinhos-vv.vercel.app/${kid.slug}`}
                viewBox={'0 0 300 400'}
              />
              <Link
                href={`kids/${kid.slug}`}
                className="font-serif font-bold text-dark tracking-wider text-sm m-2"
              >
                {`https://padrinhos-vv.vercel.app/kids/${kid.slug}`}
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
