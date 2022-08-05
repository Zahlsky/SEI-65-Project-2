// Import Hooks

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

//Import custom compnoents

import Loading from './Loading'
// Import Bootstrap Components

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/table'


const CoinIndex = () => {
  //! State 
  const [coins, setCoins] = useState([])
  const [errors, setErrors] = useState(false)
  const [search, setSearch] = useState('')
  const [filteredCoins, setFilteredCoins] = useState([])

  // ! execution
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  // ? This useEffect is going to be triggered whenever the countries state or the filters state updates
  useEffect(() => {
    //This useEffect will trigger when the countries are loaded and when a user updates one of the filters
    //So if search or region dropdown is updated, this will trigger and update the filteredCountries state
    const regexSearch = new RegExp(search, 'i')
    const filteredArray = coins.filter(money => {
      return regexSearch.test(money.name) 
    })
    setFilteredCoins(filteredArray)

    console.log('filteredArray->', filteredArray)
  }, [search, coins])




  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        setCoins(data)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
    setInterval(getData, (1000 * 60) * 5)
  }, [])


  // ! rank, logo, name, ticker, current market price, market cap


  return (
    <Container as="main" className='coin-index text-center'>
      <div>
        <input onChange={handleChange} type="text" name="search" value={search} placeholder="Search" />
      </div>
      <h1 className='text-center mb-4 mt-5'>Coins</h1>
      <Row>
      {filteredCoins.length > 0
          ?
          filteredCoins.map(coin => {
            const { id, name, image, symbol, market_cap_rank, current_price } = coin
            return (
              <Table striped bordered hover variant="dark"  className="col-3">
                <tbody>
                <tr>
                  <td className="col-1">rank {market_cap_rank}</td>
                  <td className="col-1"><img className="col-4" src={image}/></td>
                  <td className="col-2">{name}</td>
                  <td className="col-1">{symbol}</td>
                  <td className="col-3">current price £{current_price}</td>
                  <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>{coin.price_change_percentage_24h}</td>
                  <td  className="col-2"><Link className="text-decoration-none text-white" to={`/coin/${id}`}>More info</Link></td>
                </tr>
                </tbody>
              </Table>
            )
          })
          :
          <>
            {errors ? <h2>Something went wrong. Please try again later</h2> : <Loading />}
          </>
        }
      </Row>
    </Container>

  )

}
export default CoinIndex