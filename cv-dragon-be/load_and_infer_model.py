from joblib import dump, load
import numpy as np
from typing import List

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier


model = load('filename.joblib') 

vect = load('tfidf_vect.joblib')

def predict(texts: List[str]) -> np.ndarray:
    vectorised_text = vect.transform(texts)
    return model.predict_proba(vectorised_text)

def class_info(model):
    return model.classes_

def main():
    predict(["HR"])

if __name__ == "__main__":
    main()