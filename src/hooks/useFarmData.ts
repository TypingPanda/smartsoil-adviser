import { useEffect, useRef, useState } from "react";
import { getSensorData, getEvents } from "../services/api";


export interface HistoryPoint {
  time: string;
  moisture: number;
}

export interface EventLog {
  id: number;
  type: "pump" | "moisture" | "temperature" | "ai";
  message: string;
  time: string;
}

export interface FarmData {
  moisture: number;
  temperature: number;
  humidity: number;
  pump: boolean;
}

export default function useFarmData() {
  const [farmData, setFarmData] = useState<FarmData>({
    moisture: 63,
    temperature: 28,
    humidity: 65,
    pump: false,
  });
  const alertShown = useRef(false);
  const [history, setHistory] = useState<HistoryPoint[]>([
    {
      time: new Date().toLocaleTimeString([], {
        minute: "2-digit",
        second: "2-digit",
      }),
      moisture: 63,
    },
  ]);

  const [events, setEvents] = useState<EventLog[]>([
    {
      id: 1,
      type: "ai",
      message: "System Started",
      time: new Date().toLocaleTimeString([], {
        minute: "2-digit",
        second: "2-digit",
      }),
    },
  ]);

  useEffect(() => {
    async function load() {
      try {
        const sensor = await getSensorData();
        const eventList = await getEvents();
  
        setFarmData(sensor);
        if (sensor.moisture < 30) {
            if (!alertShown.current) {
              alert("⚠️ Warning! Soil moisture is critically low. Please irrigate the field.");
              alertShown.current = true;
            }
          } else {
            alertShown.current = false;
          }
        setEvents(eventList);
  
        const currentTime = new Date().toLocaleTimeString([], {
          minute: "2-digit",
          second: "2-digit",
        });
  
        setHistory((old) => [
          ...old.slice(-19),
          {
            time: currentTime,
            moisture: sensor.moisture,
          },
        ]);
      } catch (err) {
        console.error(err);
      }
    }
  
    load();
  
    const interval = setInterval(load, 2000);
  
    return () => clearInterval(interval);
  }, []);

  return {
    farmData,
    history,
    events,
  };
}