

import Link from "next/link"
// import { useTranslation } from "../../i18n"
import Image from "next/image"
// import { Footer } from "../components/Footer"

import { useTranslation } from '../../i18n/client'
import { Footer } from '../components/Footer/client'

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng, "second-page")

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-4">
      <main className="flex flex-col items-center gap-8 max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">

      <Image
            className="dark:invert transition-transform hover:scale-110"
            src="/logo.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />

        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-300">{t("title")}</h1>
        <Link
          href={`/${lng}`}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          {t("back-to-home")}
        </Link>
      </main>
      <div className="mt-8">
        <Footer lng={lng} />
      </div>
    </div>
  )
}

