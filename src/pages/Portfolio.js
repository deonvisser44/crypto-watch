import React, { useState, useContext, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import classes from "./Portfolio.module.css";
import { AuthContext } from "../store/auth-context";
import { db } from "../firebase";
import { AiOutlineDelete } from "react-icons/ai";
import TradeViewChart from "react-crypto-chart";
import {
  addDoc,
  query,
  doc,
  getDocs,
  deleteDoc,
  collection,
  orderBy,
  onSnapshot,
  QuerySnapshot,
} from "firebase/firestore";
import { MarketContext } from "../store/MarketData-Context";

ChartJS.register(ArcElement, Tooltip, Legend);

const newCoinOptions = [
  "btc",
  "eth",
  "usdt",
  "bnb",
  "usdc",
  "xrp",
  "sol",
  "luna",
  "ada",
  "ust",
];

function Portfolio() {
  const { currentUser, userUID, isLoggedIn } = useContext(AuthContext);
  const {
    coinData,
    isEditActive,
    amount,
    selected,
    totalValue,
    valueArray,
    labelArray,
    chartData,
    chartOptions,
    portfolio,
    coinOptions,
    newCoinOptions,
    onChangeAmount,
    onChangeCoin,
    addCoinHandler,
    deleteCoinHandler,
    editStateHandler,
    getPortfolio,
  } = useContext(MarketContext);

  useEffect(() => {
    getPortfolio();
  }, []);

  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let totalValueFormatted = formatter.format(totalValue);

  return (
    <div className={classes.wrapper}>
      <div
        className={
          isLoggedIn ? classes.portfolioLoggedIn : classes.portfolioLoggedOut
        }
      >
        {!isLoggedIn && (
          <div className={classes.loginText}>
            <h2>Please log in to view your portfolio.</h2>
            <Link to="/login">Log In</Link>
          </div>
        )}
        {isLoggedIn && (
          <>
            <div className={classes.left}>
              <form className={classes.addForm} onSubmit={addCoinHandler}>
                {coinOptions && (
                  <select
                    name=""
                    id="coinOptions"
                    value={selected}
                    onChange={onChangeCoin}
                  >
                    {coinOptions.map((coin) => (
                      <option key={coin} value={coin}>
                        {coin.toUpperCase()}
                      </option>
                    ))}
                  </select>
                )}
                <input
                  type="text"
                  placeholder="Amount"
                  value={amount}
                  onChange={onChangeAmount}
                />
                <button>Add</button>
              </form>
              <div className={classes.portfolioList}>
                <div className={classes.coinList}>
                  <div className={classes.labels}>
                    <h3>Coin</h3>
                    <h3>Amount</h3>
                    <h3>Value</h3>
                    <button
                      className={classes.editButton}
                      onClick={editStateHandler}
                    >
                      Edit
                    </button>
                  </div>
                  {portfolio ? (
                    portfolio.map((coin) => (
                      <div className={classes.coinRow}>
                        <p>{coin.token.toUpperCase()}</p>
                        <p>{coin.amount}</p>
                        <p>
                          $
                          {(
                            coinData.filter(
                              (obj) => obj.symbol === coin.token
                            )[0]?.current_price * coin.amount
                          ).toFixed(2)}
                        </p>
                        {isEditActive && (
                          <div className={classes.deleteButton}>
                            <AiOutlineDelete
                              onClick={() => deleteCoinHandler(coin.id)}
                            />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className={classes.emptyPortfolio}>
                      <p>
                        Add cryptocurrencies to start tracking your portfolio.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.right}>
              <h1>Total Value: {totalValueFormatted}</h1>
              <div className={classes.breakDown}>
                <h2>Portfolio Breakdown</h2>
                {portfolio && (
                  <div className={classes.chartWrapper}>
                    <Doughnut data={chartData} options={chartOptions} />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
