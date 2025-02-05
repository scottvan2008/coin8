

// import Image from "next/image"
// import Link from "next/link"
// import { useTranslation } from "../i18n"
// import { Footer } from "./components/Footer"



// export default async function Home({ params: { lng } }) {
//   const { t } = await useTranslation(lng)

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
//       <main className="flex flex-col items-center gap-8 max-w-2xl w-full">
//         <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start sm:w-full">
//           <Image
//             className="dark:invert transition-transform hover:scale-110"
//             src="/logo.png"
//             alt="Next.js logo"
//             width={50}
//             height={50}
//             priority
//           />
//           <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center sm:text-left">{t("title")}</h1>
//         </div>
//         <Link
//           href={`/${lng}/second-page`}
//           className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
//         >
//           {t("to-second-page")}
//         </Link>

//         <Link href={`/${lng}/client-page`}>
//         {t('to-client-page')}
//       </Link>


//       </main>
//       <div className="mt-8">
//         <Footer lng={lng} />
//       </div>
//     </div>
//   )
// }

'use client'

import Link from 'next/link'
import { useTranslation } from '../i18n/client'
import { Footer } from './components/Footer/client'
import { useState } from 'react'
import Image from 'next/image'

export default function Page({ params: { lng } }) {
  const { t } = useTranslation(lng)
  const [counter, setCounter] = useState(0)
  return (
    <>
      <h1>{t('title')}</h1>

      <Image
            className="dark:invert transition-transform hover:scale-110"
            src="/logo.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />


      <p>{t('counter', { count: counter })}</p>
      <div>
        <button onClick={() => setCounter(Math.max(0, counter - 1))}>-</button>
        <button onClick={() => setCounter(Math.min(10, counter + 1))}>+</button>
      </div>
      <Link href={`/${lng}`}>
        <button type="button">
          {t('back-to-home')}
        </button>
      </Link>
      <Footer lng={lng} />
    </>
  )
}