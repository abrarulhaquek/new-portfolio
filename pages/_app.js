import '@/styles/style.css'
import { ThemeChangerProvider } from '../components/ThemeChanger'

export default function App({ Component, pageProps }) {

  return (
    <ThemeChangerProvider>
      <Component {...pageProps} />
    </ThemeChangerProvider>
  )
}
