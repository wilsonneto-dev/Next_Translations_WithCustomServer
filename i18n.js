const defaultLangsFromHost = {
  'uk.co': 'en',
  cat: 'pt',
  com: 'pt',
  default: 'pt', // localhost
}

function getDomain(host) {
  const domain = host.split('.')
  return domain[domain.length - 1]
}

module.exports = {
  allLanguages: ['en', 'pt'],

  defaultLanguage: () => {
    // const host = req ? req.get('Host') : window.location.hostname
    // const domain = getDomain(host)
    return 'pt' // defaultLangsFromHost[domain] || defaultLangsFromHost.default
  },
  defaultLangRedirect: 'root',
  loadLocaleFrom: (lang, ns) =>
    import(`./locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: {
    '*': ['common', 'header'],
    // '/': ['home'],
    // '/more-examples': ['more-examples'],
    // '/more-examples/different-namespaces-by-query': ({ query }) =>
    //  query.fromDynamic ? ['dynamic'] : ['more-examples'],
  },
}
