from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()
app=FastAPI(title="Aravin AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)
chat_history = []
class ChatRequest(BaseModel):
    message: str

@app.get("/")
def home():
    return {"message": "Welcome to Aravin AI 🚀"}

@app.post("/chat")
def chat(request: ChatRequest):
    chat_history.append({
        "role": "user",
        "content": request.message
    })

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are Aravin AI. Always reply in English unless the user asks for another language."
            },
            *chat_history
        ]
    )

    reply = response.choices[0].message.content

    chat_history.append({
        "role": "assistant",
        "content": reply
    })

    return {
        "reply": reply
    }
