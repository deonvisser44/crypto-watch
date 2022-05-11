import { createContext, useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./auth-context";
import { db } from "../firebase";
import {
  addDoc,
  query,
  doc,
  deleteDoc,
  collection,
  onSnapshot,
} from "firebase/firestore";

export const MarketContext = createContext({});


export function MarketDataProvider({ children }) {
  const [coinData, setCoinData] = useState([]);
  const [isEditActive, setIsEditActive] = useState(false);
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState(undefined);
  const [coinOptions, setCoinOptions] = useState([]);
  const [portfolio, setPortfolio] = useState(null);
  const [totalValue, setTotalValue] = useState(0);
  const [valueArray, setValueArray] = useState([]);
  const [labelArray, setLabelArray] = useState([]);

  const { userUID } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoinData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  async function setDropdownOptions(){
    try{
      const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const fetchedData = await response.json()
      const filteredData = fetchedData.map(obj => obj.symbol)
      setCoinOptions(filteredData)
    } catch(error) {
      console.error('The error is:', error)
    }
  }


  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const onChangeCoin = (e) => {
    setSelected(e.target.value);
  };

  const editStateHandler = () => {
    setIsEditActive((prevState) => !prevState);
  };

  async function addCoinHandler(e) {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, userUID), {
        token: selected,
        amount: amount,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (error) {
      console.error("Error adding doc:", e);
    }
    setAmount("");
  }

  async function deleteCoinHandler(id) {
    const deleteCoin = await deleteDoc(doc(db, userUID, id));
    return deleteCoin;
  }

  const getPortfolio = () => {
    if (userUID) {
      const q = query(collection(db, userUID));
      const unsub = onSnapshot(q, (querySnapshot) => {
        let coinArray = [];
        let tempLabelArray = [];
        querySnapshot.forEach((doc) => {
          coinArray.push({ ...doc.data(), id: doc.id });
          tempLabelArray.push(doc.data().token.toUpperCase());
        });
        setPortfolio(coinArray);
        setLabelArray(tempLabelArray);
        getTotalValue(coinArray);
      });
      return () => unsub();
    }
  }

  async function getTotalValue(array) {
    const result = await array.map((item) => {
      const newItem = item;

      coinData.forEach((item2) => {
        if (item.token === item2.symbol) {
          newItem.current_price = item2.current_price;
        }
      });
      return newItem;
    });
    const totalArray = [];
    result.map((unit) => {
      return totalArray.push(unit.amount * unit.current_price);
    });
    setValueArray(totalArray);
    const totalSum = totalArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    setTotalValue(totalSum.toFixed(2));
  }

  const chartData = {
    labels: labelArray,
    datasets: [
      {
        label: "Portfolio Breakdown",
        data: valueArray,
        backgroundColor: [
          "rgba(255, 236, 33, 1)",
          "rgba(55, 138, 255, 1)",
          "rgba(255, 163, 47, 1)",
          "rgba(245, 79, 82, 1)",
          "rgba(147, 240, 59, 1)",
          "rgba(149, 82, 234, 1)",
          "rgba(185, 230, 39, 1)",
          "rgba(39, 160, 230, 1)",
          "rgba(173, 39, 230, 1)",
          "rgba(222, 49, 89, 1)",
        ],
        hoverOffset: 10,
        borderWidth: 0,
        cutout: "65%",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          color: "white",
          font: {
            size: 16,
            fontColor: "white",
          },
        },
      },
    },
  };

  useEffect(() => {
    getPortfolio();
    setDropdownOptions()
  }, []);

  const values = {
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
    getPortfolio,
    onChangeAmount,
    onChangeCoin,
    addCoinHandler,
    deleteCoinHandler,
    editStateHandler
  };
  return (
    <MarketContext.Provider value={values}>{children}</MarketContext.Provider>
  );
}
