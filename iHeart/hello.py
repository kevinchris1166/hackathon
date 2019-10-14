from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Server Works!'
  
@app.route('/ayey')
def hello_world():
    return 'Hello, World!'

def micin():
    import pandas as pd
    import sklearn as sk
    import numpy as np
    from sklearn.model_selection import train_test_split
    from sklearn import datasets
    from sklearn import svm
    df = pd.read_csv('data.csv')
    df.head()
    df = df.drop(['ca','cholesterol','oldpeak','slope','restecg','jenis_sakit_dada'],axis = 1)
    dt = df.drop(['diagnosis'],axis = 1)
    df.shape,dt.shape
    xTrain, xTest, yTrain, yTest = train_test_split(dt, df['diagnosis'], test_size = 0.25, random_state = 0)
    xTrain.shape,yTrain.shape,xTest.shape,yTest.shape
    df.head()
    clf = svm.SVC(kernel='poly',degree=0, C=10).fit(xTrain, yTrain)
    clf.score(xTest, yTest)                           
    coba = [[20,0,90,1,130,1,6],[17,]]
    clf.predict(coba)


@app.route('/get_ml')
def ml():
    return micin()



