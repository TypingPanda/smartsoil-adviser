from fastapi import APIRouter
from state import controller

router = APIRouter(prefix="/events", tags=["Events"])


@router.get("")
def get_events():
    return controller.get_events()