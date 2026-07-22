from datetime import datetime


class MockController:

    def __init__(self):
        self.state = {
            "moisture": 42,
            "temperature": 28,
            "humidity": 65,
            "pump": False,
            "mode": "auto",
            "last_update": datetime.now().isoformat()
        }

        self.events = []

    def latest(self):
        print(self.state)
        return self.state

    def start_pump(self):
        print("Pump start called")

        self.state["pump"] = True
        self.state["last_update"] = datetime.now().isoformat()

        print(self.state)

        self.events.insert(0, {
            "id": len(self.events) + 1,
            "type": "pump",
            "message": "Pump started manually",
            "time": datetime.now().strftime("%H:%M:%S")
        })

        return {
            "success": True,
            "pump": True
        }

    def stop_pump(self):
        self.state["pump"] = False
        self.state["last_update"] = datetime.now().isoformat()

        self.events.insert(0, {
            "id": len(self.events) + 1,
            "type": "pump",
            "message": "Pump stopped manually",
            "time": datetime.now().strftime("%H:%M:%S")
        })

        return {
            "success": True,
            "pump": False
        }

    def get_events(self):
        return self.events