import serial
import re
from datetime import datetime


class ArduinoController:

    def __init__(self):
        self.serial = None

        self.state = {
            "moisture": 42,
            "temperature": 28,
            "humidity": 65,
            "pump": False,
            "mode": "auto",
            "last_update": datetime.now().isoformat()
        }

        self.events = []

        try:
            # CHANGE COM PORT TOMORROW
            self.serial = serial.Serial(
                "COM5",
                9600,
                timeout=1
            )

            print("Arduino Connected")

        except Exception:
            print("Arduino Not Connected. Running with default values.")

    def latest(self):

        if self.serial:

            line = self.serial.readline().decode().strip()

            if "Soil Moisture Value" in line:

                match = re.search(r"(\d+)", line)

                if match:

                    raw = int(match.group(1))

                    moisture = round((1023 - raw) * 100 / 1023)

                    self.state["moisture"] = moisture
                    self.state["pump"] = moisture < 35
                    self.state["last_update"] = datetime.now().isoformat()

        return self.state

    def start_pump(self):

        self.state["pump"] = True

        return {
            "success": True,
            "pump": True
        }

    def stop_pump(self):

        self.state["pump"] = False

        return {
            "success": True,
            "pump": False
        }

    def get_events(self):
        return self.events