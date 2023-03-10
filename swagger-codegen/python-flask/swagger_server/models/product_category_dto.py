# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class ProductCategoryDTO(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, name: str=None, description: str=None):  # noqa: E501
        """ProductCategoryDTO - a model defined in Swagger

        :param id: The id of this ProductCategoryDTO.  # noqa: E501
        :type id: int
        :param name: The name of this ProductCategoryDTO.  # noqa: E501
        :type name: str
        :param description: The description of this ProductCategoryDTO.  # noqa: E501
        :type description: str
        """
        self.swagger_types = {
            'id': int,
            'name': str,
            'description': str
        }

        self.attribute_map = {
            'id': 'id',
            'name': 'name',
            'description': 'description'
        }
        self._id = id
        self._name = name
        self._description = description

    @classmethod
    def from_dict(cls, dikt) -> 'ProductCategoryDTO':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ProductCategoryDTO of this ProductCategoryDTO.  # noqa: E501
        :rtype: ProductCategoryDTO
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this ProductCategoryDTO.


        :return: The id of this ProductCategoryDTO.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this ProductCategoryDTO.


        :param id: The id of this ProductCategoryDTO.
        :type id: int
        """

        self._id = id

    @property
    def name(self) -> str:
        """Gets the name of this ProductCategoryDTO.


        :return: The name of this ProductCategoryDTO.
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name: str):
        """Sets the name of this ProductCategoryDTO.


        :param name: The name of this ProductCategoryDTO.
        :type name: str
        """
        if name is None:
            raise ValueError("Invalid value for `name`, must not be `None`")  # noqa: E501

        self._name = name

    @property
    def description(self) -> str:
        """Gets the description of this ProductCategoryDTO.


        :return: The description of this ProductCategoryDTO.
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description: str):
        """Sets the description of this ProductCategoryDTO.


        :param description: The description of this ProductCategoryDTO.
        :type description: str
        """

        self._description = description
