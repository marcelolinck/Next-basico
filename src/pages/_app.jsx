// Aqui é o unico local onde será carregado todos os arquivos styles de forma global

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
