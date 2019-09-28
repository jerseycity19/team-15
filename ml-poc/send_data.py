import boto3
MTURK_SANDBOX = 'https://mturk-requester-sandbox.us-east-1.amazonaws.com'
mturk = boto3.client('mturk',
   aws_access_key_id = "",
   aws_secret_access_key = "s",
   region_name='us-east-1',
   endpoint_url = MTURK_SANDBOX
)

question = open(name='mturk_template.xml',mode='r').read()
new_hit = mturk.create_hit(
    Title = 'Self-Censorship Evaluation',
    Description = 'Read these quantifications for a person and determine how legitimately they need assistance',
    Keywords = 'probability, scholars, at, risk',
    Reward = '0.15',
    MaxAssignments = 1,
    LifetimeInSeconds = 172800,
    AssignmentDurationInSeconds = 600,
    AutoApprovalDelayInSeconds = 14400,
    Question = question
)
print("A new HIT has been created. You can preview it here:")
print("https://workersandbox.mturk.com/mturk/preview?groupId=" + new_hit['HIT']['HITGroupId'])
print("HITID = " + new_hit['HIT']['HITId'] + " (Use to Get Results)")