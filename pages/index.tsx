import Head from 'next/head'

import Header from '../components/header'

import useTranslation from 'next-translate/useTranslation'

export const Home = (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        {t('common:test')} - {'end'}
      </main>
    </div>
  )
}

export default Home
