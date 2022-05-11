import React, { useContext } from "react";
import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { BiLineChart } from 'react-icons/bi';
import { BsNewspaper, BsJournalBookmarkFill } from 'react-icons/bs';
import { FiLogIn, FiLogOut } from 'react-icons/fi';

function Nav() {
  const { logout, currentUser } = useContext(AuthContext);

  return (
    <>
      <div className={classes.navbar}>
        <p className={classes["nav-1"]}>CoinWatch</p>
        <Link
          style={{ textDecoration: "none", backgroundColor: "cornflowerblue" }}
          to="/crypto-watch"
        >
          <p>Market</p>
        </Link>
        <Link
          style={{ textDecoration: "none", backgroundColor: "cornflowerblue" }}
          to="/news"
        >
          <p className={classes["nav-3"]}>News</p>
        </Link>
        <Link
          style={{ textDecoration: "none", backgroundColor: "cornflowerblue" }}
          to="/portfolio"
        >
          <p>Portfolio</p>
        </Link>
        {!currentUser ? (
          <Link
            style={{
              textDecoration: "none",
              backgroundColor: "cornflowerblue",
            }}
            to="/login"
          >
            <p>Login</p>
          </Link>
        ) : (
          <Link
            style={{
              textDecoration: "none",
              backgroundColor: "cornflowerblue",
            }}
            onClick={logout}
            to="/crypto-watch"
          >
            <p>Logout</p>
          </Link>
        )}
      </div>
      <div className={classes.mobileNavbar}>
        <p className={classes["nav-1"]}>CoinWatch</p>

        <div className={classes.footerMenu}>
          <Link className={classes.footerMenuItem} to="/crypto-watch">
            <div><BiLineChart /><p>Market</p></div>
          </Link>
          <Link className={classes.footerMenuItem} to="/news">
          <div><BsNewspaper /><p>News</p></div>
          </Link>
          <Link className={classes.footerMenuItem} to="/portfolio">
          <div><BsJournalBookmarkFill /><p>Portfolio</p></div>
          </Link>
          {!currentUser ? (
            <Link className={classes.footerMenuItem} to="/login">
              <div><FiLogIn /><p>Login</p></div>
            </Link>
          ) : (
            <Link className={classes.footerMenuItem} onClick={logout} to="/crypto-watch">
              <div><FiLogOut /><p>Logout</p></div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
