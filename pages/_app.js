import { StoreProvider } from 'store'
// _app.js

// Import styles
import './styles.css'

// Function to create custom app
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

// Export app
export default MyApp