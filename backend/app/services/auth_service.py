from dotenv import load_dotenv
import os
from fastapi import HTTPException, Depends
from authlib.integrations.starlette_client import OAuth
from starlette.requests import Request
from sqlalchemy.orm import Session
from sqlalchemy.future import select
from db.models import User
from db import get_db

load_dotenv()

GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
REDIRECT_URI = os.getenv("REDIRECT_URI")


# Initialize OAuth
oauth = OAuth()

oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    authorize_url="https://accounts.google.com/o/oauth2/auth",
    authorize_params={"scope": "openid email profile"},
    access_token_url="https://oauth2.googleapis.com/token",
    access_token_params=None,
    userinfo_url="https://www.googleapis.com/oauth2/v3/userinfo",
    client_kwargs={"scope": "openid email profile"},
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration", 
)

class AuthService:

    @staticmethod
    async def google_login(request: Request):
        return await oauth.google.authorize_redirect(request, REDIRECT_URI)

    @staticmethod
    async def google_callback(request: Request, db: Session = Depends(get_db)):
        token = await oauth.google.authorize_access_token(request)
        user_info = token.get("userinfo")

        if not user_info:
            raise HTTPException(status_code=400, detail="Invalid user info")

        email = user_info["email"]
        name = user_info.get("name", "Unknown User")
        avatar = user_info.get("picture", None)

        result = db.execute(select(User).where(User.email == email))
        user = result.scalars().first()

        if not user:
            user = User(email=email, name=name, avatar=avatar, provider="google")
            db.add(user)
            db.commit()
            db.refresh(user)

        return {"message": "Login successful", 
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "name": user.name,
                    "avatar": user.avatar,
                    "provider": user.provider
                        }
                }

    @staticmethod
    def get_current_user(email: str, db: Session = Depends(get_db)):
        result = db.execute(select(User).where(User.email == email))
        user = result.scalars().first()

        if not user:
            raise HTTPException(status_code=401, detail="User not authenticated")

        return {"user": {
            "id": user.id,
            "email": user.email,
            "name": user.name,
            "avatar": user.avatar,
            "provider": user.provider
        }}