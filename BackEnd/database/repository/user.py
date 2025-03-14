from models.domain.user import BaseRepository
from models.domain.user import UserCreate, UserInDB
from core.security import hash_password

INSERT_USER_QUERY = """
INSERT INTO users (username, email, hashed_password)
VALUES ($1, $2, $3)
RETURNING id, created_at;
"""

class UsersRepository(BaseRepository):
    async def create_user(self, user: UserCreate) -> UserInDB:
        hashed_pw = hash_password(user.password)  # Mã hóa mật khẩu
        user_row = await self._log_and_fetch_row(
            INSERT_USER_QUERY,
            user.username,
            user.email,
            hashed_pw
        )
        return UserInDB(**user.dict(), hashed_password=hashed_pw, **user_row)
