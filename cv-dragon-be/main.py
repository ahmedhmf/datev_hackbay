from typing import Annotated

from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader

from transformers import pipeline

model_name = "deepset/xlm-roberta-large-squad2"

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def read_pdf_to_str(uploaded_file: UploadFile) -> str:
    reader = PdfReader(uploaded_file.file)
    page_strs = []
    for page in reader.pages:
        page_strs.append(page.extractText())
    return " ".join(page_strs)

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile | None = None):
    if not file:
        return {"message": "No upload file sent"}
    elif file.filename.endswith('pdf'):
        page_content = read_pdf_to_str(file)
        return {'page-content': page_content}
    
@app.get("/cv/details")
async def askQuestionForCv(content: str, question: str):
    nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)
    QA_input = {
        'question': question,
        'context': content
    }
    res = nlp(QA_input)
    return {'answer': res["answer"]}
