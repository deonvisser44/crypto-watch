import React, { useContext, useEffect, useState } from "react";
import TradeViewChart from "react-crypto-chart";
import classes from "./ChartModal.module.css";
import { ChartContext } from "../store/Chart-Context";

function ChartModal() {
  const { tokenForChart, closeModal } = useContext(ChartContext);

  let content;

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


  return (
    <div className={classes.backdrop} onClick={(e) => closeModal()}>
      <div className={classes.parent} onClick={(e) => e.stopPropagation()}>
        <h3>{tokenForChart}/USDT - 1 min</h3>
        <TradeViewChart
        interval="30m"
          containerStyle={{
            minHeight: "80vh",
            minWidth: "80vw",
            marginBottom: "30px",
          }}
          chartLayout={layout}
          pair={`${tokenForChart}USDT`}
        />
      </div>
    </div>
  );
}

export default ChartModal;
