from flask import jsonify
from flask_restful import Resource
from app.common.models import Categories as ct
from app.common.schemas import CategorySchema


class Categories(Resource):

    def get(self):
        categories_schema = CategorySchema(many=True)

        all_categories = ct.query.all()
        return jsonify(categories_schema.dumps(all_categories))

    def post(self): ...

    def put(self): ...
