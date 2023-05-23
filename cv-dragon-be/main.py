from typing import Annotated

from fastapi import FastAPI, File, UploadFile
from PyPDF2 import PdfReader

app = FastAPI()


@app.post("/files/")
async def create_file(file: Annotated[bytes | None, File()] = None):
    if not file:
        return {"message": "No file sent"}
    else:
        return {"file_size": len(file)}


def read_pdf_to_str(uploaded_file: UploadFile) -> str:
    reader = PdfReader(uploaded_file.file)
    page = reader.pages[0]
    print(page.extract_text())

@app.post("/uploadfile/")
async def create_upload_file(file: UploadFile | None = None):
    if not file:
        return {"message": "No upload file sent"}
    else:
        read_pdf_to_str(file)
        return {"filename": file.filename}

        client = TestClient(app)


def test_read_main():
    response = client.get("/docs")
    assert response.status_code == 200