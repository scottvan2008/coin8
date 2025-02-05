import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../i18n/settings'
import { useTranslation } from '../../i18n'

const languages = ["en", "de"] // Add your supported languages here

export const LanguageSwitcher = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "languageSwitcher")

  return (
    <div className="mt-12 text-center">
      <div className="mb-4">
        <Trans i18nKey="languageSwitcher" t={t}>
          Switch from <strong className="font-semibold">{{ lng }}</strong> to:
        </Trans>
      </div>
      <div className="flex justify-center space-x-2">
        {languages
          .filter((l) => lng !== l)
          .map((l) => (
            <Link
              key={l}
              href={`/${l}`}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {l.toUpperCase()}
            </Link>
          ))}
      </div>
    </div>
  )
}