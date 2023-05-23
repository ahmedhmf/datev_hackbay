# How to setup and run the Dev Environment

## Installation (MacOS)


Run the following commands in Terminal 

```
brew install miniconda
conda env create -f environment.yml
```

## Running the local Server


```
cd cv-dragon-be
uvicorn main:app
```

Output should be something like

```
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)
```

Access the API-Documentation via http://127.0.0.1:8000/docs
