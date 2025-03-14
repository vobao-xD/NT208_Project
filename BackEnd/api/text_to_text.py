from fastapi import APIRouter
from services.text_ai import generate_text

router=APIRouter()

@router.post("/text-to-text")
async def text_to_text(input_text: str):
    output=generate_text(input_text)
    return {'content':output}