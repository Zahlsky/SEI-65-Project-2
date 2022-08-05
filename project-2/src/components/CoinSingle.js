import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import CurrencyFormat from 'react-currency-format'

// import page loading spinner

import Spinner from './Spinner'

// Imports from bootstrap

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CoinSingle = () => {

  const { coinId } = useParams()

  // State

  const [ coin, setCoin ] = useState(null)
  const [ errors, setErrors ] = useState(false)

  console.log('coin id', coinId)

  // https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false/${coinId}

  // ?tickers=false&market_data=true&community_data=false&developer_data=false

  //Execution

  useEffect (() => {
    const getData = async () => {
        try {
        console.log('HELLO')
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        setCoin(data)
        console.log('data', data)
      } catch (err) {
        console.log('ERROR')
        //setErrors(true)
      }
    }
    getData()
  }, [coinId])


  return(
    <Container as="main">
      <Row>
      {coin ?
          <>
            <h1 className='text-center mt-5'>{coin.id}</h1>
            <Col md="12" className='text-center mt-4'>
              <img className='w-40' src={coin.image.large} alt={coin.name} />
            </Col>
            <Col md="12" className='text-center mt-5'>
              <div>
                <h3><span>Rank #</span>{coin.market_cap_rank}</h3>
              </div>
              <div>
                <h3><span>Price </span><CurrencyFormat value={coin.market_data.current_price.gbp} displayType={'text'} thousandSeparator={true} prefix={'£'} /></h3>
              </div>
              <div>
                <h3><span>24h high </span><CurrencyFormat value={coin.market_data.high_24h.gbp} displayType={'text'} thousandSeparator={true} prefix={'£'} /></h3>
              </div>

              <div>
                <h3><span>24h low </span><CurrencyFormat value={coin.market_data.low_24h.gbp} displayType={'text'} thousandSeparator={true} prefix={'£'} /></h3>
              </div>
              <div>
                <h3><span>Market Cap </span><CurrencyFormat value={coin.market_data.market_cap.gbp} displayType={'text'} thousandSeparator={true} prefix={'£'} /></h3>
              </div>
              <div>
                <h3><span>Total Supply </span><CurrencyFormat value={coin.market_data.total_supply} displayType={'text'} thousandSeparator={true} /> <span> {coin.symbol} </span></h3>
              </div>
              <div>
                <h3><span>Circulating Supply </span><CurrencyFormat value={coin.market_data.circulating_supply} displayType={'text'} thousandSeparator={true} /><span> {coin.symbol} </span></h3>
              </div>

              <Link to="/" className='btn light mt-5'>Back to all coins</Link>
            </Col>


          </>
        :

        <h2 className="text-center">
            { errors ? 'Something went wrong. Please try again later' : <Spinner />}
        </h2>

        }
      </Row>

    </Container>

  )

  
}

export default CoinSingle