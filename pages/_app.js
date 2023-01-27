import { GlobalContextProvider } from '../src/context/state'
import '../styles/style.scss'


export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}
