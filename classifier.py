# Importing Library
import pandas as pd
import numpy as np
from sklearn import preprocessing
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn import metrics
import time
import pickle
from sklearn.svm import SVC
from sklearn.neural_network import MLPClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.neighbors import KNeighborsClassifier

# Reading the training dataset in a dataframe using Pandas
df = pd.read_csv("data.csv")


#Imputing Missing values with mean for continuous variable
df['LoanAmount'].fillna(df['LoanAmount'].mean(), inplace=True)
df['Loan_Amount_Term'].fillna(df['Loan_Amount_Term'].mean(), inplace=True)
df['ApplicantIncome'].fillna(df['ApplicantIncome'].mean(), inplace=True)
df['CoapplicantIncome'].fillna(df['CoapplicantIncome'].mean(), inplace=True)

# Impute missing values for all the columns
df['Gender'].fillna(df['Gender'].mode()[0],inplace=True)
df['Married'].fillna(df['Married'].mode()[0],inplace=True)
df['Dependents'].fillna(df['Dependents'].mode()[0],inplace=True)
df['Credit_History'].fillna(df['Credit_History'].mode()[0],inplace=True)

# Convert all non-numeric values to number
cat=['Gender','Married','Dependents','Education','Self_Employed','Credit_History','Property_Area','Loan_Status']
for var in cat:
    le = preprocessing.LabelEncoder()
    df[var]=le.fit_transform(df[var].astype('str'))
    

# Perform log transformation of TotalIncome to make it closer to normal
df['LoanAmount_log'] = np.log(df['LoanAmount'])

y=df['Loan_Status']
df=df.drop(['Loan_Status','Loan_ID'],axis=1)
X_train, X_test, y_train, y_test = train_test_split(df, y, test_size=0.33, random_state=42)

def train(model,X_train,X_test,y_train,y_test,model_name):
    model.fit(X_train, y_train)
    #Predict Output
    predicted= model.predict(X_test)
    accuracy = metrics.accuracy_score(predicted,y_test)
    print ("Accuracy : %s" % "{0:.3%}".format(accuracy))
    filename = model_name
    pickle.dump(model, open(filename, 'wb'))
    
start = time.time()
model = LogisticRegression()
train(model,X_train,X_test,y_train,y_test,'Logistic Regression')
end = time.time()
print(end - start,"s Time for Logisitic Regression")
    
start = time.time()
model = GaussianNB()
train(model,X_train,X_test,y_train,y_test,'Gaussian Naive Bayes')
end = time.time()
print(end - start,"s Time for GNB")

start = time.time()
model = RandomForestClassifier(max_depth=5, n_estimators=10, max_features=1)
train(model,X_train,X_test,y_train,y_test,'Random Forest')
end = time.time()
print(end - start,"s Time for Random Forest")

start = time.time()
model =  DecisionTreeClassifier(max_depth=5)
train(model,X_train,X_test,y_train,y_test,'Decision Tree Classifier')
end = time.time()
print(end - start,"s Time for Decision Tree")

start = time.time()
model = SVC(kernel="linear", C=0.025)
train(model,X_train,X_test,y_train,y_test,'SVC Linear')
end = time.time()
print(end - start,"s Time for SVC")

start = time.time()
model = KNeighborsClassifier(3)
train(model,X_train,X_test,y_train,y_test,'KNN')
end = time.time()
print(end - start,"s Time for KNN")
    
    
start = time.time()
model = MLPClassifier(alpha=1, max_iter=1000)
train(model,X_train,X_test,y_train,y_test,'Multi Layer Perceptron')
end = time.time()
print(end - start,"s Time for MLP")

start = time.time()
model = AdaBoostClassifier()
train(model,X_train,X_test,y_train,y_test,'AdaBoost')
end = time.time()
print(end - start,"s Time for AdaBoost")