import Head from 'next/head'
import '../styles/globals.css'
//<script src="//cdn.jsdelivr.net/npm/eruda"></script>
 // <script src="https://cdn.jsdelivr.net/npm/eruda-dom"></script>
//<script>eruda.init();eruda.add(erudaDom);
//</script>
function MyApp({ Component, pageProps }) {
  return (
  <>
   <Head>
<script src="//cdn.jsdelivr.net/npm/eruda"></script>
  <script src="https://cdn.jsdelivr.net/npm/eruda-dom"></script>
<script>eruda.init();eruda.add(erudaDom);
</script>
<link rel="preconnect" href="https://cdn.statically.io/" />
<link rel="dns-prefetch" href="https://cdn.statically.io/" />



 </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
