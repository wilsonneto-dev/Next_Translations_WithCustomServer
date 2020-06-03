import useTranslation from 'next-translate/useTranslation'

export default (): JSX.Element => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('header:test')}</h1>
    </>
  )
}
