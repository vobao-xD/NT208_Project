from fastapi import APIRouter
from services.video_ai import generate_video

router=APIRouter()

@router.post("/text-to-video")
async def text_to_video(input_text: str):
    video_url=generate_video(input_text)
    return {'video_url':video_url}