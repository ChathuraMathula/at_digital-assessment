import '../styles/App.css'
import Footer from './footer/Footer'
import Header from './header/Header'
import Jumbotron from './other/jumbotron/Jumbotron'
import ConsultingServiceCard from './ui/cards/consulting_service_card/ConsultingServiceCard'
import DevelopmentServiceCard from './ui/cards/development_service_card/DevelopmentServiceCard'

function App() {

  return (
    <>
      <Header />
      <Jumbotron />
      <DevelopmentServiceCard />
      <ConsultingServiceCard />
      <Footer />
    </>
  )
}

export default App
