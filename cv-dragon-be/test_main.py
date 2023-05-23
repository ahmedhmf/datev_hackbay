from fastapi.testclient import TestClient

from .main import app

client = TestClient(app)


# Test Fileupload and the content based on multipage pdf

def test_read_main():
    filename = "./testresources/multipage.pdf"

    response = client.post("/uploadfile/", files={"file": ("filename", open(filename, "rb"), "multipart/formdata")})
    assert response.status_code == 200