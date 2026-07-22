from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chat", tags=["Chat"])


class ChatRequest(BaseModel):
    message: str
    context: dict | None = None


@router.post("")
def chat(req: ChatRequest):
    print(req.message)
    print(req.context)

    return {
        "reply": f"You said: {req.message}"
    }