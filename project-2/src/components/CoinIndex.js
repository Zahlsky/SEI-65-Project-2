// Import Hooks

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

//Import custom compnoents

import Spinner from "./Spinner";

// Import Bootstrap Components

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import table from "react-bootstrap/table";

const CoinIndex = () => {
  //! State
  const [coins, setCoins] = useState([]);
  const [errors, setErrors] = useState(false);
  const [filterCoin, setFilterCoin] = useState({
    search: "",
  });

  // ! execution
  const handleChange = (event) => {
    const newObj = {
      ...filterCoin,
      [event.target.name]: event.target.value,
    };
    setFilterCoin(newObj);
    console.log("filtered", filterCoin);
  };

  // ? This useEffect is going to be triggered whenever the countries state or the filters state updates
  useEffect(() => {
    //This useEffect will trigger when the countries are loaded and when a user updates one of the filters
    //So if search or region dropdown is updated, this will trigger and update the filteredCountries state
    const regexSearch = new RegExp(filterCoin.search, "i");
    const filteredArray = coins.filter((money) => {
      return regexSearch.test(money.name) && money.name === filterCoin.name;
    });
    setFilterCoin(filteredArray);
    console.log("filtered 2", filterCoin);
    console.log("filteredArray->", filteredArray);
  }, [filterCoin, coins]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCoins(data);
      } catch (err) {
        console.log(err);
        setErrors(true);
      }
    };
    getData();
    //setInterval(getData, (1000 * 60) * 5)
  }, []);

  // ! rank, logo, name, ticker, current market price, market cap

  return (
    <Container as="main" className="coin-indes text-center">
      <div>
        <input
          onChange={handleChange}
          type="text"
          name="search"
          value={filterCoin.search}
          placeholder="Search"
        />
      </div>
      <h1 className="text-center mb-4">Coins</h1>
      <Row>
        {coins.length > 0 ? (
          coins.map((coin) => {
            const { id, name, image, market_cap_rank, current_price } = coin;

            return (
              <Table striped bordered hover variant="dark">
                <thread>
                  <tr>
                    <th>#</th>
                    <th>rank</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Current Market Price</th>
                    <th>Market Cap</th>
                  </tr>
                </thread>
                <tbody>
                  <tr>
                    <th>#</th>
                    <th>rank</th>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Ticker</th>
                    <th>Current Market Price</th>
                    <th>Market Cap</th>
                  </tr>
                </tbody>
              </Table>
              // <Col key={id} md="6" lg="4" className='mb-4'>
              //   <Link to={`/coin/${id}`}>
              //     <Card>
              //       <Card.Img variant='top' src={image}></Card.Img>
              //       <Card.Body className='bg-light'>
              //         <Card.Title className='text-center mb-0'>{name} - {image}</Card.Title>
              //       </Card.Body>
              //     </Card>
              //   </Link>
              // </Col>
            );
          })
        ) : (
          <>
            {errors ? (
              <h2>Something went wrong. Please try again later</h2>
            ) : (
              <Spinner />
            )}
          </>
        )}
      </Row>
    </Container>
  );
};
export default CoinIndex;
