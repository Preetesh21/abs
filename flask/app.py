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
    
    content = request.get_json()
    #return jsonify(content)
    int_features = [float(x) for x in content.values()]
    int_features=np.array(int_features)
    int_features.shape=(1,11)
    prediction = model.predict(int_features)
    if(prediction[0]==0):
        mssg="Sadly Not Granted!!!"
    else:
        mssg="Congrats u r passed!!!"
    return(jsonify(predict=int(prediction[0]),message=mssg))

@app.route('/api/', methods=['POST', 'GET'])
def api_post():
    if request.method == 'POST':
        req = request.json
        return jsonify(name='john')

if __name__ == '__main__':
   app.run(host="localhost", port=8000,debug = True)