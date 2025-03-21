import asyncio
from googletrans import Translator
import requests
from dotenv import load_dotenv
import json
import base64
from pydantic import BaseModel
import os

load_dotenv()
apiKey = os.getenv('TTI_API_KEY')
accountId = os.getenv('TTI_ACCOUNT_ID')

class SlowPrompt(BaseModel):
    prompt: str
    negative_prompt: str
    height: int
    width: int
    num_steps: int
    guidance: float
    model: int

class QuickPrompt(BaseModel):
    prompt: str
    steps: int

async def translateText(text: str):
     async with Translator() as translator:
         result = await translator.translate(text)
         return result
     
head = {
    "Authorization": f"Bearer {apiKey}"
}

def getImageSlow(prompt: str | None, negative_prompt: str = '', height = 512, width = 512, num_steps = 20, guidance = 7.5, model=0):
    if prompt is None:
        return 'No prompt'
    sub_url = ['stabilityai/stable-diffusion-xl-base-1.0','bytedance/stable-diffusion-xl-lightning']
    url = f'https://api.cloudflare.com/client/v4/accounts/{accountId}/ai/run/@cf/{sub_url[model]}'
    if model in [0,1]:
        body = json.dumps(
            {
                'prompt':prompt,
                'negative_prompt':negative_prompt,
                'height':height,
                'width':width,
                'num_steps':num_steps,
                'guidance':guidance
            }
        )
        response = requests.post(url, body, headers=head)
        successCode = response.status_code
        if successCode == 200:
            image = response.content
            return base64.b64encode(image)
        else:
            return 'Something went wrong'

def getImageQuick(prompt: str | None, steps: int = 4):
    if prompt is None:
        return 'No prompt'
    url = f'https://api.cloudflare.com/client/v4/accounts/{accountId}/ai/run/@cf/black-forest-labs/flux-1-schnell'
    body = json.dumps(
            {
                'prompt':prompt,
                'steps':steps
            }
        )
    response = requests.post(url, body, headers=head)
    successCode = response.status_code
    if successCode == 200:
        image = json.loads(response.text)['result']['image']
        return image
    else:
        return 'Something went wrong'


def textToImageSlow(prompt: SlowPrompt):
    enPrompt = asyncio.run(translateText(prompt.prompt)).text
    image = getImageSlow(enPrompt, prompt.negative_prompt, prompt.height, prompt.width, prompt.num_steps, prompt.guidance, prompt.model)
    return image

def textToImageQuick(prompt: QuickPrompt):
    enPrompt = asyncio.run(translateText(prompt.prompt)).text
    image = getImageQuick(enPrompt, prompt.steps)
    return image
