import React, { useContext, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import classes from "./Portfolio.module.css";
import { AuthContext } from "../store/auth-context";
import { AiOutlineDelete } from "react-icons/ai";
import { MarketContext } from "../store/MarketData-Context";
import loading from '../assets/loadergif.gif';

ChartJS.register(ArcElement, Tooltip, Legend);

function Portfolio() {
  const { isLoggedIn } = useContext(AuthContext);
  const {
    coinData,
    isEditActive,
    amount,
    selected,
    totalValue,
    chartData,
    chartOptions,
    portfolio,
    coinOptions,
    onChangeAmount,
    onChangeCoin,
    addCoinHandler,
    deleteCoinHandler,
    editStateHandler,
    getPortfolio,
    isFetchingProfile,
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
      {isLoggedIn && portfolio && portfolio.length === 0 && (
        <p className={classes.emptyPortfolio}>
          Add cryptocurrencies to start tracking your portfolio
        </p>
      )}
      <div
        className={
          isLoggedIn ? classes.portfolioLoggedIn : classes.portfolioLoggedOut
        }
      >
        {!isLoggedIn && !isFetchingProfile && (
          <div className={classes.loginText}>
            <h2>Please log in to view your portfolio.</h2>
            <Link to="/login">Log In</Link>
          </div>
        )}
        {isFetchingProfile && (
          <div className={classes.loadingSpinner}>
            <img src={loading} alt="loading" />
          </div>
        )}
        {isLoggedIn && !isFetchingProfile && (
          <>
            <div className={classes.left}>
              <form className={classes.addForm} onSubmit={addCoinHandler}>
                {coinOptions && (
                  <select
                    id="coinOptions"
                    defaultValue=""
                    value={selected}
                    onChange={onChangeCoin}
                  >
                    <option hidden value="">
                      Currency
                    </option>
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
                    <div className={classes.buttonDiv}>
                      <button
                        className={classes.editButton}
                        onClick={editStateHandler}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  {portfolio &&
                    portfolio.map((coin) => (
                      <div key={coin.token} className={classes.coinRow}>
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
                    ))}
                </div>
              </div>
            </div>
            {portfolio && portfolio.length > 0 && (
              <div className={classes.right}>
                <h1>Total Value: {totalValueFormatted}</h1>
                <div className={classes.breakDown}>
                  {portfolio && (
                    <div className={classes.chartWrapper}>
                      <Doughnut data={chartData} options={chartOptions} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
