from typing import Annotated

from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from PyPDF2 import PdfReader
from load_and_infer_model import predict_class

from transformers import pipeline

model_name = "deepset/xlm-roberta-large-squad2"

app = FastAPI(debug=True)

job_titles_lookup = {}
cv_content_lookup = {}

def read_pdf_to_str(uploaded_file: UploadFile) -> str:
    reader = PdfReader(uploaded_file.file)
    page_strs = []
    for page in reader.pages:
        page_strs.append(page.extract_text())
    return " ".join(page_strs)

@app.post("/uploadfile/")
async def create_upload_file(email: str, file: UploadFile | None = None):
    if not file:
        return {"message": "No upload file sent"}
    elif file.filename.endswith('pdf'):
        page_content = read_pdf_to_str(file)
        cv_content_lookup[email] = page_content
        return {'page-content': page_content}
    
@app.get("/cv/details/")
async def askQuestionForCv(content: str, question: str):
    nlp = pipeline('question-answering', model=model_name, tokenizer=model_name)
    QA_input = {
        'question': question.strip(),
        'context': content.strip()
    }
    res = nlp(QA_input)
    return {'answer': res["answer"].strip()}

@app.post("/register/")
async def registerForPositions(email: str, job_titles: list[str]):
    job_titles_lookup[email] = job_titles
    return {'success': 'true'}

@app.get("/lookup/", description="""

# interested Job Position

-  ACCOUNTANT
-  ADVOCATE
-  AGRICULTURE
-  APPAREL
-  ARTS
-  AUTOMOBILE
-  AVIATION
-  BANKING
-  BPO
-  BUSINESS-DEVELOPMENT
-  CHEF
-  CONSTRUCTION
-  CONSULTANT
-  DESIGNER
-  DIGITAL-MEDIA
-  ENGINEERING
-  FINANCE
-  FITNESS
-  HEALTHCARE
-  HR
-  INFORMATION-TECHNOLOGY
-  PUBLIC-RELATIONS
-  SALES
-  TEACHER

""")
async def lookupJobpositionApplicants(job_title: str, interested_job_position: str):
    applicants = []
    for email, val in job_titles_lookup.items():
        if job_title in val: 
            predictedScore = predict_class([cv_content_lookup[email]], interested_job_position)
            applicants.append({"email": email, "score": predictedScore})
    return {"applicants": applicants}

@app.get("/predictjob/", description="""

# interested Job Position

-  ACCOUNTANT
-  ADVOCATE
-  AGRICULTURE
-  APPAREL
-  ARTS
-  AUTOMOBILE
-  AVIATION
-  BANKING
-  BPO
-  BUSINESS-DEVELOPMENT
-  CHEF
-  CONSTRUCTION
-  CONSULTANT
-  DESIGNER
-  DIGITAL-MEDIA
-  ENGINEERING
-  FINANCE
-  FITNESS
-  HEALTHCARE
-  HR
-  INFORMATION-TECHNOLOGY
-  PUBLIC-RELATIONS
-  SALES
-  TEACHER

""")
async def predictMatchingJobs(content: str, interested_job_position):
    prediction = predict_class([content], interested_job_position)
    return {"prediction" : prediction}

@app.get("/me/")
async def getProfile(email: str):
    return {"job_titles": job_titles_lookup[email]}


origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)