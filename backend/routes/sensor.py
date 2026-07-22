from fastapi import APIRouter
from state import controller

router = APIRouter(prefix="/sensor", tags=["Sensor"])


@router.get("/latest")
def latest():
    return controller.latest()