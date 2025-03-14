from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.base import BASE

db_user: str='username'
db_password: str='userpassword'
db_host: str='...'
db_port:int=9999
db_name: str='name database'

uri: str=f'postgresql://{db_user}:{db_password}@{db_host}/{db_name}'

engine =create_engine(uri)
BASE.metadata.create_all(bind=engine)
session=sessionmaker(autocomit=False,autoflush=False,bind=engine)

Base=declaretive_base()