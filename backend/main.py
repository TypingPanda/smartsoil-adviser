from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.sensor import router as sensor_router
from routes.pump import router as pump_router
from routes.events import router as events_router
from routes.chat import router as chat_router

app = FastAPI(title="SmartSoil Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(sensor_router)
app.include_router(pump_router)
app.include_router(events_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {"message": "Backend Running"}


@app.get("/health")
def health():
    return {"status": "ok"}