# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class UserDTO(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, login: str=None):  # noqa: E501
        """UserDTO - a model defined in Swagger

        :param id: The id of this UserDTO.  # noqa: E501
        :type id: int
        :param login: The login of this UserDTO.  # noqa: E501
        :type login: str
        """
        self.swagger_types = {
            'id': int,
            'login': str
        }

        self.attribute_map = {
            'id': 'id',
            'login': 'login'
        }
        self._id = id
        self._login = login

    @classmethod
    def from_dict(cls, dikt) -> 'UserDTO':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The UserDTO of this UserDTO.  # noqa: E501
        :rtype: UserDTO
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this UserDTO.


        :return: The id of this UserDTO.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this UserDTO.


        :param id: The id of this UserDTO.
        :type id: int
        """

        self._id = id

    @property
    def login(self) -> str:
        """Gets the login of this UserDTO.


        :return: The login of this UserDTO.
        :rtype: str
        """
        return self._login

    @login.setter
    def login(self, login: str):
        """Sets the login of this UserDTO.


        :param login: The login of this UserDTO.
        :type login: str
        """

        self._login = login
