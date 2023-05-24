from joblib import dump, load
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier


model = load('filename.joblib') 

vect = load('tfidf_vect.joblib')

def predict(text):
    vectorised_text = vect.transform(text)
    return model.predict_proba(vectorised_text)
