# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class KeyAndPasswordVM(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, key: str=None, new_password: str=None):  # noqa: E501
        """KeyAndPasswordVM - a model defined in Swagger

        :param key: The key of this KeyAndPasswordVM.  # noqa: E501
        :type key: str
        :param new_password: The new_password of this KeyAndPasswordVM.  # noqa: E501
        :type new_password: str
        """
        self.swagger_types = {
            'key': str,
            'new_password': str
        }

        self.attribute_map = {
            'key': 'key',
            'new_password': 'newPassword'
        }
        self._key = key
        self._new_password = new_password

    @classmethod
    def from_dict(cls, dikt) -> 'KeyAndPasswordVM':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The KeyAndPasswordVM of this KeyAndPasswordVM.  # noqa: E501
        :rtype: KeyAndPasswordVM
        """
        return util.deserialize_model(dikt, cls)

    @property
    def key(self) -> str:
        """Gets the key of this KeyAndPasswordVM.


        :return: The key of this KeyAndPasswordVM.
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key: str):
        """Sets the key of this KeyAndPasswordVM.


        :param key: The key of this KeyAndPasswordVM.
        :type key: str
        """

        self._key = key

    @property
    def new_password(self) -> str:
        """Gets the new_password of this KeyAndPasswordVM.


        :return: The new_password of this KeyAndPasswordVM.
        :rtype: str
        """
        return self._new_password

    @new_password.setter
    def new_password(self, new_password: str):
        """Sets the new_password of this KeyAndPasswordVM.


        :param new_password: The new_password of this KeyAndPasswordVM.
        :type new_password: str
        """

        self._new_password = new_password
