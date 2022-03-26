from typing import Any
from sqlalchemy import Column, CHAR
from .connection import Base
from abc import ABC, abstractmethod


class TableBase(ABC, Base):

    @abstractmethod
    def get_by_id(id: int) -> Any: ...

    @abstractmethod
    def filter_by(**kwargs: dict) -> Any: ...
