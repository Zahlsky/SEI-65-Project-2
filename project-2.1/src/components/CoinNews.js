import { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap'

import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const CoinNews = ({ symbol }) => {

  console.log(`NEW API SYMBOL ->, ${symbol}`)
  // ! state
  const [ news, setNews ] = useState(null)
  const [ newsErr, setNewsErr ] = useState(false)

  // ! Execution
  useEffect(() => {
    const getNews = async () => {
      try {

        const { data } = await axios.get(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=CRYPTO:${symbol}&time_from=20220410T0130&limit=55&apikey=7FVRLQDMZWW3RN11`)
        setNews(data)
      } catch (err) {
        console.log(err)
        setNewsErr(true)
      }
    }
    getNews()
  }, [symbol])

  // ! JSX 
  return (
    <Container>
      <Row>
        { news ?
          news.feed.map((article, i) => {
            const { title, source, summary, url} = article
            return (
              <>
                <a className="text-decoration-none" href={url}>
                  <Card key={i} className="bg-dark mb-2 text-white" style={{ width: '100%'}} >
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{source}</Card.Subtitle>
                      <Card.Text>{summary}</Card.Text>
                      <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                    </Card.Body>
                  </Card> 
                </a>

              </>
            )
          })
          
          :
          <>
            { newsErr ? <h2>Something went wrong. Please try again later</h2> : <h2>okay</h2>}
          </>
        }
      </Row>
    </Container>
  )
}

export default CoinNews