from .database import *
from .models import *
from .schemas import *
from .crud import *

# Khởi tạo database
def init_db():
    Base.metadata.create_all(bind=engine)