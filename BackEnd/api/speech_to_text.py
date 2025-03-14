from fastapi import APIRouter
from services.speech_ai import generate_speech

router=APIRouter()

@router.post("/text-to-speech")
async def text_to_image(input_text: str):
    speech=generate_speech(input_text)
    return {"image_url":speech}
