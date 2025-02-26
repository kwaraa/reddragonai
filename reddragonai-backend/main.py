from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from transformers import pipeline

app = FastAPI()

# Allow frontend to access API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to ["http://localhost:3000"] for security
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define input model
class PromptRequest(BaseModel):
    prompt: str

generator = pipeline("text-generation", model="distilgpt2")

@app.get("/")
def read_root():
    return {"message": "LLM API is running"}

@app.post("/generate/")
def generate_text(request: PromptRequest):
    prompt_text = request.prompt 
    result = generator(prompt_text, max_length=100)
    return {"generated_text": result[0]["generated_text"]}
