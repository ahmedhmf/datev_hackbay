from fastapi.testclient import TestClient
from httpx import QueryParams

from main import app

client = TestClient(app)


# Test Fileupload and the content based on multipage pdf

def test_read_main():
    filename = "./testresources/multipage.pdf"

    response = client.post("/uploadfile/", files={"file": (filename, open(filename, "rb"), "multipart/formdata")})
    assert response.status_code == 200
    assert response.json().get("page-content") is not None
    assert response.json()["page-content"] == "PrintNode Multi \nPage Test Start\n1\n 2\n 3\n 4\n 5\n 6\n 7\n 8\n 9\n PrintNode \nMultipage Test End\n10\n"
    
def test_get_details():
    params = QueryParams({"content": "PERSONAL BACKGROUND\nWith my energetic and motivated personality, I\nwould like to get into IT as a front-end\ndeveloper. Not only am I looking for positive\nstress, but I look forward to any challenge where\nI can learn new things.Fritz-Henßler-Berufskolleg\nDortmund\nQualification for Destiller 2021\nImmanuel-Kant-\nGymnasium Leipzig\nAbitur 2015\nEurope Coding Bootcamps\nBootcamp for Junior Front End\nDeveloper 2023\nVSCode \nGitHub \nVue\nCypress\nNPM\nREST API\n TECH STACK\nHTML\nCSS\nJavaScript\nVue.js\nLANGUAGESTOOLING\nKONTAKTDETAILS\n  (+49) 176 - 3929 8086\nanja.wurlitzer.coding@gmail.com\n Moritzstr. 10\n 04600 AltenburgINTERESTS\nfitness, journaling, musicin education until June 2021 Destiller\nFriedrich Specht Söhne - Meerane |\nJanuary 2020 - March 2022\nAltenburger Destillerie | \nSept. 2018 - Dec. 2019\nMaking and developing of liquids and \n spirits, operating the bottling plants,\nsensory testingfitness trainer, teens club, customer\nservice, show entertainment Hotel Animation\nPinkWave / Atlantica Mikri Poli Crete |\nMay 2022 - Oct. 2022ANJA WURLITZER\nborn 07/11/1995 in Leipzig\nEnglish - B1German - mother tongueEDUCATION\nLAST EXPERIENCES\nSOFT SKILLS\nproduct development in spirit industry in young age\nclose cooperation as hotel entertainer with team\nmembers as well as hotel stuff and guests.\nquick familiarization and absorbing the knowledge in the\nbootcampproblem solving - ingenuity - resilience\n communication - empathy - teamwork\n rapid understanding - adaptation - IT-affinityPROJEKTS\nQuizapp (final project)\nGithub: AnjaWurli\n", "question": "What is the github username?"})
    response = client.get('/cv/details/', params=params)

    assert response.status_code == 200
    assert response.json().get("answer") is not None
    assert response.json()["answer"] == "AnjaWurli"