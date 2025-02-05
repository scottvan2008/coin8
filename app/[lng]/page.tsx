import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from '../i18n'
import { Footer } from "./components/Footer";

export default async function Home({ params: { lng } }) {

  const { t } = await useTranslation(lng)


  return (
    <div >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={50}
          height={50}
          priority
        />
        <div>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>
        {t('to-second-page')}
      </Link>
        </div>

      </main>
      <Footer lng={lng} />
      
    </div>
  );
}
