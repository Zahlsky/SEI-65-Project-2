import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

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
        { coin ?
        <> 
        <h1>{coin.id}</h1>
        {/* <Col md="6">
          <img className='w-100' src={coin.image} alt={coin.name} />
        </Col>
        <Col md="6">
          <div>
            <h3><span>$</span>{coin.current_price}</h3>
          </div>
          <div>
            <h3><span></span>{coin.price_change_24h}</h3>
          </div>
          <div>
            <h3><span>Rank #</span>{coin.market_cap_rank}</h3>
          </div>
          <div>
            <h3><span></span>{coin.price_change_24h}</h3>
          </div>
          <div>
            <h3><span>Market Cap</span>{coin.market_cap}</h3>
          </div>

          <Link to="/coins" className='btn dark'>Back to all coins</Link>
        </Col> */}


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