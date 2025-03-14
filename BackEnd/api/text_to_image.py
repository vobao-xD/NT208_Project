from fastapi import APIRouter
from services.image_ai import generate_image

router=APIRouter()

@router.post("/text-to-image")
async def text_to_imgae(input_text: str):
    image_url=generate_image(input_text)
    return {'image_url':image_url}
