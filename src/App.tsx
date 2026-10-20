import { Header, Hero, Contact, Footer } from './components'
import { contactInfo } from './data/contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Contact contactInfo={contactInfo} />
      </main>
      <Footer />
    </>
  )
}

export default App
