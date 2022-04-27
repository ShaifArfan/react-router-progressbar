import { useEffect } from 'react';
import NProgress from 'nprogress';
import '../styles/globals.css'
import { useRouter } from 'next/router'
import 'nprogress/nprogress.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  NProgress.configure({ showSpinner: false });
  
useEffect(() => {

  const handleProgressStart = () => {
    NProgress.start()
  };

  const handleProgressDone = () => {
    NProgress.done()
  };

  router.events.on('routeChangeStart', handleProgressStart);
  router.events.on('routeChangeComplete', handleProgressDone);
  router.events.on('routeChangeError', handleProgressDone);

  // If the component is unmounted, unsubscribe
  // from the event with the `off` method:
  return () => {
    router.events.off('routeChangeStart', handleProgressStart)
    router.events.off('routeChangeComplete', handleProgressDone)
    router.events.off('routeChangeError', handleProgressDone);
  }
}, [router])

  return <Component {...pageProps} />
}

export default MyApp
