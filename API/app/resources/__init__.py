from flask import Blueprint
from flask_restful import Api
from .Categories import Categories
from ..common.routes import *
from .login import Login

api_bp = Blueprint('api_bp', __name__)
api = Api(api_bp, catch_all_404s=True)

api.add_resource(Login, LOGIN_PATH)
api.add_resource(Categories, GET_CATEGORIES_PATH)
