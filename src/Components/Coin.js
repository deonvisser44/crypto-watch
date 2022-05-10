import React, { useContext } from "react";
import classes from "./Coin.module.css";
import { ChartContext } from "../store/Chart-Context";

const Coin = ({
  name,
  rank,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
  openChartModal,
}) => {
  const { setTokenForChart, openModal } = useContext(ChartContext);
  return (
    <div className={classes["coin-container"]} onClick={() => {openModal(); let upperCaseToken = symbol.toUpperCase(); setTokenForChart(upperCaseToken)}}>
      <div className={classes.coinRow}>
        <p className={classes.coinRank}>{rank}</p>
        
         
          <img className={classes.img} src={image} alt="crypto" />
          <p className={classes.coinName}>{name}</p>
        
        <p className={classes.coinSymbol}>{symbol}</p>

        <p className={classes.coinPrice}>${price}</p>
        {priceChange < 0 ? (
          <p className={classes.coinPercentRed}>{priceChange.toFixed(2)}%</p>
        ) : (
          <p className={classes.coinPercentGreen}>{priceChange.toFixed(2)}%</p>
        )}
        <p className={classes.coinVolume}>${volume.toLocaleString()}</p>
        <p className={classes.coinMarketCap}>${marketcap.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Coin;
