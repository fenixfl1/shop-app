import os
from os.path import abspath, dirname
from dotenv import load_dotenv

APP_ROOT = dirname(dirname(abspath(__file__)))
dotenv_path = os.path.join(APP_ROOT, '.env')
load_dotenv(dotenv_path)

DEBUG = False
TESTING = False
ENV = ''

UPLOAD_FOLDER_DEST = os.getenv('UPLOAD')
SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE')
SECRET_KEY = os.urandom(24)
SQLALCHEMY_TRACK_MODIFICATIONS = False
