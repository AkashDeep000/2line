
import dynamic from 'next/dynamic'


import Header from '../components/Header.js'

const DynamicComponent = dynamic(() => import('../components/Test'))



function Home() {
  return (
    <div>
      <Header />
      <DynamicComponent />
      <p>HOME PAGE is here!</p>
    </div>
  )
}

export default Home;
