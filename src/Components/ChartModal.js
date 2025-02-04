import React, { useContext } from "react";
import TradeViewChart from "react-crypto-chart";
import classes from "./ChartModal.module.css";
import { ChartContext } from "../store/Chart-Context";

function ChartModal() {
  const { tokenForChart, closeModal } = useContext(ChartContext);

  let layout = {
    layout: {
      backgroundColor: "#161A25",
      textColor: "white",
    },
    grid: {
      vertLines: {
        color: "#454545",
      },
      horzLines: {
        color: "#454545",
      },
    },
    priceScale: {
      borderColor: "#485c7b",
    },
    timeScale: {
      borderColor: "#485c7b",
      timeVisible: true,
      secondsVisible: false,
    },
  };


  let chartHeight;
  let chartWidth;

  if(window.screen.width > 820){
    chartWidth = window.screen.width * 0.9;
    chartHeight = window.screen.height * 0.7;
  } else {
    chartWidth = window.screen.width * 0.8;
    chartHeight = window.screen.height * 0.6;
  }

  return (
    <div className={classes.backdrop} onClick={(e) => closeModal()}>
      <div className={classes.parent} onClick={(e) => e.stopPropagation()}>
        <h3 className={classes.tokenPair}>{tokenForChart}/USDT - 1 min</h3>
        <TradeViewChart
          interval="30m"
          containerStyle={{
            minHeight: chartHeight,
            minWidth: chartWidth,
          }}
          chartLayout={layout}
          pair={`${tokenForChart}USDT`}
        />
      </div>
    </div>
  );
}

export default ChartModal;
