import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt

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

# def generate_features():
#     # Connect to running SQL server and GRAB DATA and turn into feature map
#     obtained_data = None

#     # assuming that we already have the data in table format
#     feature_list = []
#     for row in obtained_data:
#         for idx, col in enumerate(row):
#             feature_list.append(q_maps[i][col])

#     return np.ndarray.flatten(feature_list)

tf.reset_default_graph()

# Create some variables.
v1 = tf.get_variable("v1", shape=[3])
v2 = tf.get_variable("v2", shape=[5])

np.random.seed(101) 
tf.set_random_seed(101) 
saver = tf.train.Saver()
X = tf.placeholder("float")
Y = tf.placeholder("float")
x = np.linspace(0, 50, 50)
y = np.linspace(0, 50, 50)
x += np.random.uniform(-4, 4, 50)
y += np.random.uniform(-4, 4, 50)

cost = 0

with tf.Session() as sess:
    model = saver.restore(sess, "/tmp/model.ckpt")
    sess.run(cost, feed_dict = {X : x, Y : y})
    print(cost)