from typing import Annotated

from fastapi import FastAPI, File, UploadFile
from PyPDF2 import PdfReader

app = FastAPI()

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
    else:
        page_content = read_pdf_to_str(file)
        return {'page-content': page_content}