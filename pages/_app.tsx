import '../styles/lib/globals.scss'
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('service worker registered.'))
        .catch(err => console.log(err));
    }
  }, [])
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

