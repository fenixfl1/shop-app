from sqlalchemy import Column, String, Integer, ForeignKey, Float, ARRAY, Date, CHAR
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from .connection import Base


class Categories(Base):
    __tablename__ = 'CATEGORIES'

    id = Column('CATEGORY_ID', Integer, primary_key=True)
    name = Column('NAME', String(50), nullable=False)
    description = Column('DESCRIPTION', String(150), nullable=False)
    state = Column('STATE', CHAR(1), nullable=False, default='A')

    def __repr__(self) -> str:
        return f'{self.name}'

    @staticmethod
    def get_by_id(id: int) -> 'Categories':
        return Categories.query.get(id)


class ProductCategory(Base):
    __tablename__ = 'PRODUCT_CATEGORY'

    id = Column('PRODUCTS_CATEGORY_ID', Integer, primary_key=True)
    category_id = Column('CATEGORY_ID', Integer,
                         ForeignKey('CATEGORIES.CATEGORY_ID'))
    product_id = Column('PRODUCT_ID', Integer,
                        ForeignKey('PRODUCTS.PRODUCT_ID'))
    state = Column('STATE', CHAR(1), nullable=False, default='A')

    @staticmethod
    def get_by_id(id: int) -> 'ProductCategory':
        return ProductCategory.query.get(id)


class Products(Base):
    __tablename__ = 'PRODUCTS'

    id = Column('PRODUCT_ID', Integer, primary_key=True)
    name = Column('NAME', String(100), nullable=False)
    description = Column('DESCRIPTION', String(500))
    stock = Column('STOCK', Integer, nullable=False)
    price = Column('PRICE', Float(2), nullable=False)
    percent_discount = Column('PERCENT_DISCOUNT', Float(2), default=0.00)
    brand = Column('BRAND', String(50))
    model = Column('MODEL', String(50))
    condition = Column('CONDITION', String(50), nullable=False,
                       default='NEW', comment='NEW, USED, USED LIKE NEW, ....')
    tags = Column('TAGS', String(150),
                  comment='Each tag must be separated by #')
    added_at = Column('ADDEDD_AT', Date(), nullable=False, default=func.now())
    images = relationship('ProductsImages', back_populates='')
    state = Column('STATE', CHAR(1), nullable=False, default='A')

    def __repr__(self) -> str:
        return f'{self.name}'

    @staticmethod
    def get_by_id(id: int) -> 'Products':
        return Products.query.get(id)

    @staticmethod
    def filter_by(**kwargs: dict) -> 'Products':
        return Products.query.filter_by(**kwargs)


class ProductsImages(Base):
    __tablename__ = 'PRODUCTS_IMAGES'

    id = Column('PRODUCT_IMAGE_ID', Integer, primary_key=True)
    name = Column('NAME', String(50), nullable=False)
    extention = Column('EXTENTION', String(5), nullable=False)
    img_url = Column('IMG_URL', String(100), nullable=False)
    product_id = Column(Integer, ForeignKey(
        'PRODUCTS.PRODUCT_ID', ondelete='CASCADE'))
    product = relationship('Products', back_populates='images')
    state = Column('STATE', CHAR(1), nullable=False, default='A')

    def __repr__(self) -> str:
        return f'{self.img_url}'

    @staticmethod
    def get_by_id(id: int) -> 'ProductsImages':
        return ProductsImages.query.get(id)
