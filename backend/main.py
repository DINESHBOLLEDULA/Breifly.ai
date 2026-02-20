from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from supabase import create_client
import os

load_dotenv()

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://breifly--ai.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

security = HTTPBearer(auto_error=False)

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_SERVICE_KEY = os.getenv("SUPABASE_SERVICE_KEY")  # ← service role key

supabase = create_client(SUPABASE_URL, SUPABASE_SERVICE_KEY)

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    if not credentials:
        return None
    try:
        # Let Supabase verify the token
        user = supabase.auth.get_user(credentials.credentials)
        return user.user
    except Exception as e:
        print("Auth error:", e)
        return None  # treat as guest if token invalid

# ── Routes ─────────────────────────────────────────────────

@app.get("/")
def home():
    return {"message": "FastAPI running 🚀"}

@app.get("/api/data")
def get_data():
    return {"data": "Hello from FastAPI"}

@app.get("/api/me")
def get_me(user=Depends(get_current_user)):
    if not user:
        raise HTTPException(status_code=401, detail="Not logged in")
    return {
        "email": user.email,
        "id": user.id
    }

@app.post("/api/generate")
def generate(request: Request, user=Depends(get_current_user)):
    if user:
        return {"message": f"Logged in as {user.email}"}
    else:
        return {"message": "Guest user — limited access"}
