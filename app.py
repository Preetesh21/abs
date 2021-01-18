import numpy as np
from flask import Flask, request, render_template
import pickle
from sklearn.preprocessing import LabelEncoder
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = pickle.load(open('models/Logistic_Regression.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict',methods=['POST'])
def predict():
    print(request)
    int_features = [float(x) for x in request.form.values()]
    #print(int_features)
    int_features=np.array(int_features)
    int_features.shape=(1,11)
    print(int_features)
    prediction = model.predict(int_features)
    return render_template('index.html', prediction_text='Bank Loan Approval Prediction is prediction{}'.format(prediction))


if __name__ == '__main__':
   app.run(debug = True)