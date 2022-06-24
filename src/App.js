import Header from './components/header/Header'
import Discovering from './components/discovering/Discovering'
import Works from './components/how-works/Works'
import Carousel from './components/carousel/Carousel'
import Brands from './components/brands/Brands'
import Comments from './components/comments/Comments'
import Shuffle from './components/shuffle/Shuffle'
import Offer from './components/offer/Offer'
import TakeQuiz from './components/take-quiz/TakeQuiz'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'

function App() {
  return (
   <>
    <Header/>
    <main>
      <Discovering/>
      <Works/>
      <Carousel/>
      <Brands/>
      <Comments/>
      <Shuffle/>
      <Offer/>
      <TakeQuiz/>
      <Faq/>
    </main>
    <Footer/>
   </>
  );
}

export default App;
