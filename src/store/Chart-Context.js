import { createContext, useState } from "react";

export const ChartContext = createContext({});

export function ChartContextProvider({ children }) {
  const [showChartModal, setShowChartModal] = useState(false);
  const [tokenForChart, setTokenForChart] = useState("BTC");

  const openModal = () => {
    setShowChartModal(true);
  };

  const closeModal = () => {
    setShowChartModal(false);
  };

  const values = {
    showChartModal,
    tokenForChart,
    setTokenForChart,
    openModal,
    closeModal,
  };
  return (
    <ChartContext.Provider value={values}>{children}</ChartContext.Provider>
  );
}
