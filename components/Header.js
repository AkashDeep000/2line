import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/test.module.css'

const Header = ({ ... title}) => {

return (
    <>
 <Head>
 <script src="/sticky-header.js"></script>
 </Head>
<div className="header">
    <Link href="/"><a className="logo" >2Liner</a></Link>
<div className="dropdown" style={{float: 'right'}}>
  <button className="dropbtn">☰</button>

  <div className="dropdown-content">
    
  <a href="#https://modapk.vercel.app">Status</a>
  <a href="#">Shayeri</a>
  <a href="#">Quotes</a>
    <a href="#">Wishes</a>
  <a href="#">Events</a>
    <a href="#">Examplemple</a>
  <a href="#">Install App</a>
  </div>
</div>
</div>
    <div className={styles.testy}>Testing</div>
</>
)
}
export default Header;