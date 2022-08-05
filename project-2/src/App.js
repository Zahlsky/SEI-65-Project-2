// ! Imports packages
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// ! Import components
import PageNavbar from './components/PageNavbar'
import CoinIndex from './components/CoinIndex'
import CoinSingle from './components/CoinSingle'
import NotFound from './components/NotFound'

function App() {

  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          {/* HOME */}
          {/* Landing page with coin list */}
          <Route path="/" element={<CoinIndex />} />

          {/* COIN SINGLE */}
          {/* Dynamic page rendering single coin info */}
          <Route path ="/coin/:coinId" element={<CoinSingle />} />

          {/* NOT FOUND */}
          {/* page visable when unknown path is visited */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
