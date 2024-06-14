# from fastapi import FastAPI
# from dotenv import load_dotenv
# load_dotenv()

# app = FastAPI()

# from app.routes import *

from fastapi import Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from dotenv import load_dotenv
load_dotenv()

app = FastAPI()

app.mount("/templates/assets", StaticFiles(directory="templates/assets", check_dir= False), name="templates/assets")
templates = Jinja2Templates(directory="templates")

@app.get("/")
def web_root(request: Request):
    return templates.TemplateResponse("./index.html", {"request": request})