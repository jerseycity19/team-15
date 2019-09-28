import tensorflow as tf
import numpy

# train on regression with 7 features: probability of fraudulent

q1_map = {
    'scholar' : [1,0,0,0],
    'student' : [0,1,0,0],
    'administrator' : [0,0,1,0],
    'non-university' : [0,0,0,1]
}
q2_map = {
    '20-29' : [1,0,0,0,0,0],
    '30-39' : [0,1,0,0,0,0],
    '40-49' : [0,0,1,0,0,0],
    '50-59' : [0,0,0,1,0,0],
    '60-69' : [0,0,0,0,1,0],
    '70+' : [0,0,0,0,0,1]
}
q3_map = {
    'M' : [1,0,0],
    'F' : [0,1,0],
    'nonbinary' : [0,0,1]
}
q4_map = {
    'north america' : [1,0,0,0,0,0,0,0,0],
    'south america' : [0,1,0,0,0,0,0,0,0],
    'middle east' : [0,0,1,0,0,0,0,0,0],
    'sub-saharan africa' : [0,0,0,1,0,0,0,0,0],
    'east asia' : [0,0,0,0,1,0,0,0,0],
    'southeast asia' : [0,0,0,0,0,1,0,0,0],
    'europe' : [0,0,0,0,0,0,1,0,0],
    'central asia' : [0,0,0,0,0,0,0,1,0],
    'pacific' : [0,0,0,0,0,0,0,0,1]
}
q5_map = {
    'english' : [1,0,0,0,0,0,0,0,0,0],
    'chinese': [0,1,0,0,0,0,0,0,0,0],
    'italian' : [0,0,1,0,0,0,0,0,0,0],
    'turkish' : [0,0,0,1,0,0,0,0,0,0],
    'spanish' : [0,0,0,0,1,0,0,0,0,0],
    'german' : [0,0,0,0,0,1,0,0,0,0],
    'korean' : [0,0,0,0,0,0,1,0,0,0],
    'japanese' : [0,0,0,0,0,0,0,1,0,0],
    'arabic' : [0,0,0,0,0,0,0,0,1,0],
    'urdu' : [0,0,0,0,0,0,0,0,0,1]
}
q6_map = {
    'tenure or other permanent appointment' : [1,0,0,0,0,0],
    'tenure or other permanent appointment' : [0,1,0,0,0,0],
    'full-time time-limited contract' : [0,0,1,0,0,0],
    'adjunct or part-time contract' : [0,0,0,1,0,0],
    'part-time no contract' : [0,0,0,0,1,0],
    'not employed' : [0,0,0,0,0,1]
}
q7_map = {
    'natural sciences' : [1,0,0,0,0,0,0,0,0],
    'social sciences' : [0,1,0,0,0,0,0,0,0],
    'arts and humanities' : [0,0,1,0,0,0,0,0,0],
    'engineering' : [0,0,0,1,0,0,0,0,0],
    'computer science' : [0,0,0,0,1,0,0,0,0],
    'medicine' : [0,0,0,0,0,1,0,0,0],
    'business/finance' : [0,0,0,0,0,0,1,0,0],
    'law/human rights' : [0,0,0,0,0,0,0,1,0],
    'other' : [0,0,0,0,0,0,0,0,1]
}
q8_map = {
    'never' : [1,0,0,0],
    'sometimes' : [0,1,0,0],
    'frequently' : [0,0,1,0],
    'all the time' : [0,0,0,1]
}
q9_map = {
    'none' : [1,0,0,0],
    'a few' : [0,1,0,0],
    'a majority' : [0,0,1,0],
    'almost all' : [0,0,0,1]
}
q10_map = {
    'never' : [1,0,0,0],
    'sometimes' : [0,1,0,0],
    'frequently' : [0,0,1,0],
    'all the time' : [0,0,0,1]
}
q11_map = {
    'colleagues/professional peers' : [1,0,0,0,0,0,0],
    'university/employer' : [0,1,0,0,0,0,0],
    'home country government' : [0,0,1,0,0,0,0],
    'foreign country government' : [0,0,0,1,0,0,0],
    'society/public' : [0,0,0,0,1,0,0],
    'not sure' : [0,0,0,0,0,1,0],
    'no fear of consequences' : [0,0,0,0,0,0,1]
}
q12_map = {
    'yes' : [1,0,0],
    'no' : [0,1,0],
    'not sure' : [0,0,1]
}
q13_map = {
    'yes' : [1,0,0],
    'no' : [0,1,0],
    'not sure' : [0,0,1]
}
q14_map = {
    'more likely' : [1,0,0],
    'less likely' : [0,1,0],
    'about the same' : [0,0,1]
}

q_maps = [q1_map, q2_map, q3_map, q4_map, q5_map, q6_map, q7_map, q8_map, q9_map, q10_map, q11_map, q12_map, q13_map, q14_map]

def generate_features():
    


X = numpy.zeros([157, 128])
Y = numpy.zeros([157], dtype=numpy.int32)
example_id = numpy.array(['%d' % i for i in range(len(Y))])

x_column_name = 'x'
example_id_column_name = 'example_id'

train_input_fn = tf.estimator.inputs.numpy_input_fn(
    x={x_column_name: X, example_id_column_name: example_id},
    y=Y,
    num_epochs=None,
    shuffle=True)

svm = tf.contrib.learn.SVM(
    example_id_column=example_id_column_name,
    feature_columns=(tf.contrib.layers.real_valued_column(
        column_name=x_column_name, dimension=128),),
    l2_regularization=0.1)

svm.fit(input_fn=train_input_fn, steps=10)