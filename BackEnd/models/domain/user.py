from datetime import datetime
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserInDB(UserCreate):
    id: int
    hashed_password: str
    created_at: datetime
