from app.extensions import ma


class CategorySchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description', 'state')
