import React, { useState, useContext } from "react";
import Coin from "../Components/Coin";
import Scroll from "../Components/Scroll";
import classes from "./Market.module.css";
import { MarketContext } from "../store/MarketData-Context";
import { ChartContext } from "../store/Chart-Context";
import ChartModal from "../Components/ChartModal";

function Market() {
  const [search, setSearch] = useState("");

  const { coinData } = useContext(MarketContext);
  const { showChartModal } = useContext(ChartContext)

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coinData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className={classes["main-div"]}>
      {showChartModal && <ChartModal />}
      <div className={classes["coin-app"]}>
        <div className={classes["coin-search"]}>
          <h1 className={classes["coin-text"]}>CoinWatch</h1>
          <form>
            <input
              className={classes["coin-input"]}
              type="text"
              onChange={handleChange}
              placeholder="Search"
            />
          </form>
        </div>
        <div className={classes.labels}>
          <p className={classes["rank-label"]}>#</p>
          <p className={classes["coin-label"]}>Coin</p>
          <p className={classes["token-label"]}>Token</p>
          <p className={classes["price-label"]}>Price</p>
          <p className={classes["change-label"]}>Change</p>
          <p className={classes["volume-label"]}>Volume</p>
          <p className={classes["mktcap-label"]}>Mkt Cap</p>
        </div>
        {coinData &&
          filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                rank={coin.market_cap_rank}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.total_volume}
                volume={coin.market_cap}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
      </div>
      <Scroll />
    </div>
  );
}

export default Market;