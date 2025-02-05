import Image from "next/image";
import Link from 'next/link'

export default function Home({ params: { lng } }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
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
        <h1>Hi there!</h1>
      <Link href={`/${lng}/second-page`}>
        second page
      </Link>
        </div>

      </main>
      
    </div>
  );
}
