from joblib import dump, load
import numpy as np
from typing import List

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier


# 0 ACCOUNTANT
# 1 ADVOCATE
# 2 AGRICULTURE
# 3 APPAREL
# 4 ARTS
# 5 AUTOMOBILE
# 6 AVIATION
# 7 BANKING
# 8 BPO
# 9 BUSINESS-DEVELOPMENT
# 10 CHEF
# 11 CONSTRUCTION
# 12 CONSULTANT
# 13 DESIGNER
# 14 DIGITAL-MEDIA
# 15 ENGINEERING
# 16 FINANCE
# 17 FITNESS
# 18 HEALTHCARE
# 19 HR
# 20 INFORMATION-TECHNOLOGY
# 21 PUBLIC-RELATIONS
# 22 SALES
# 23 TEACHER

model = load('basic_forest.joblib') 

vect = load('tfidf_vect.joblib')

def predict(texts: List[str]) -> np.ndarray:
    vectorised_text = vect.transform(texts)
    return model.predict_proba(vectorised_text)

def predict_class(texts, class_of_interest):
    if class_of_interest not in model.classes_:
        print(f"{class_of_interest} not in {model.classes_}")
    else:
        class_idx = list(model.classes_).index(class_of_interest)
        predictions = model.predict_proba(vectorised_text)
        return list(predictions[:, class_idx])



def class_info(model):
    return model.classes_

def main():
    predict(["HR"])

if __name__ == "__main__":
    main()