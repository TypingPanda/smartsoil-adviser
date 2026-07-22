import { createContext, useContext } from "react";
import useFarmData from "../hooks/useFarmData";

interface FarmContextType extends ReturnType<typeof useFarmData> {
  averageMoisture: number;
  wateringCount: number;
}

const FarmDataContext = createContext<FarmContextType | undefined>(undefined);

export function FarmDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Live farm data
  const farm = useFarmData();

  // Analytics
  const averageMoisture =
    farm.history.length > 0
      ? farm.history.reduce((sum, item) => sum + item.moisture, 0) /
        farm.history.length
      : 0;

  const wateringCount = farm.events.filter(
    (event) =>
      event.type === "pump" &&
      event.message === "Pump Started"
  ).length;

  const value: FarmContextType = {
    ...farm,
    averageMoisture,
    wateringCount,
  };

  return (
    <FarmDataContext.Provider value={value}>
      {children}
    </FarmDataContext.Provider>
  );
}

export function useFarm() {
  const context = useContext(FarmDataContext);

  if (!context) {
    throw new Error(
      "useFarm must be used inside FarmDataProvider"
    );
  }

  return context;
}