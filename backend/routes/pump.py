from fastapi import APIRouter
from state import controller

router = APIRouter(prefix="/pump", tags=["Pump"])


@router.post("/start")
def start():
    return controller.start_pump()


@router.post("/stop")
def stop():
    return controller.stop_pump()