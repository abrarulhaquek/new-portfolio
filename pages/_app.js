import '@/styles/style.css'
import ThemeChanger from './ThemeChanger'

export default function App({ Component, pageProps }) {

  return (
    <ThemeChanger>
      <Component {...pageProps} />
    </ThemeChanger>
  )
}
