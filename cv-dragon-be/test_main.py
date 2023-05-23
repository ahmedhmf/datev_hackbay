from fastapi.testclient import TestClient

from main import app

client = TestClient(app)


# Test Fileupload and the content based on multipage pdf

def test_read_main():
    filename = "./testresources/multipage.pdf"

    response = client.post("/uploadfile/", files={"file": ("filename", open(filename, "rb"), "multipart/formdata")})
    assert response.status_code == 200
    assert response.json().get('page-content') is not None
    assert response.json()["page-content"] == "PrintNode Multi \nPage Test Start\n1\n 2\n 3\n 4\n 5\n 6\n 7\n 8\n 9\n PrintNode \nMultipage Test End\n10\n"
    