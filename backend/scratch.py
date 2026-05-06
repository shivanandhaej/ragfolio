import os
from dotenv import load_dotenv
load_dotenv("../.env")

import rag_query

try:
    print(rag_query.answer_question("What is the name?"))
except Exception as e:
    print("Exception caught:", e)
