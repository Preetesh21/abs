import numpy as np
from flask import Flask, request, render_template,jsonify, make_response
import pickle
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
model = pickle.load(open('model/Logistic_Regression.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    print (request.is_json)
    content = request.get_json()
    print (content.values())
    #return jsonify(content)
    int_features = [float(x) for x in content.values()]
    print(int_features)
    int_features=np.array(int_features)
    int_features.shape=(1,11)
    print(int_features)
    prediction = model.predict(int_features)
    print(prediction,prediction[0])
    return(jsonify(predict=int(prediction[0])))

if __name__ == '__main__':
   app.run(host="localhost", port=8000,debug = True)