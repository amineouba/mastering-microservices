# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
import re  # noqa: F401,E501
from swagger_server import util


class User(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, login: str=None, first_name: str=None, last_name: str=None, email: str=None, activated: bool=None, lang_key: str=None, image_url: str=None, reset_date: datetime=None):  # noqa: E501
        """User - a model defined in Swagger

        :param id: The id of this User.  # noqa: E501
        :type id: int
        :param login: The login of this User.  # noqa: E501
        :type login: str
        :param first_name: The first_name of this User.  # noqa: E501
        :type first_name: str
        :param last_name: The last_name of this User.  # noqa: E501
        :type last_name: str
        :param email: The email of this User.  # noqa: E501
        :type email: str
        :param activated: The activated of this User.  # noqa: E501
        :type activated: bool
        :param lang_key: The lang_key of this User.  # noqa: E501
        :type lang_key: str
        :param image_url: The image_url of this User.  # noqa: E501
        :type image_url: str
        :param reset_date: The reset_date of this User.  # noqa: E501
        :type reset_date: datetime
        """
        self.swagger_types = {
            'id': int,
            'login': str,
            'first_name': str,
            'last_name': str,
            'email': str,
            'activated': bool,
            'lang_key': str,
            'image_url': str,
            'reset_date': datetime
        }

        self.attribute_map = {
            'id': 'id',
            'login': 'login',
            'first_name': 'firstName',
            'last_name': 'lastName',
            'email': 'email',
            'activated': 'activated',
            'lang_key': 'langKey',
            'image_url': 'imageUrl',
            'reset_date': 'resetDate'
        }
        self._id = id
        self._login = login
        self._first_name = first_name
        self._last_name = last_name
        self._email = email
        self._activated = activated
        self._lang_key = lang_key
        self._image_url = image_url
        self._reset_date = reset_date

    @classmethod
    def from_dict(cls, dikt) -> 'User':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The User of this User.  # noqa: E501
        :rtype: User
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this User.


        :return: The id of this User.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this User.


        :param id: The id of this User.
        :type id: int
        """

        self._id = id

    @property
    def login(self) -> str:
        """Gets the login of this User.


        :return: The login of this User.
        :rtype: str
        """
        return self._login

    @login.setter
    def login(self, login: str):
        """Sets the login of this User.


        :param login: The login of this User.
        :type login: str
        """
        if login is None:
            raise ValueError("Invalid value for `login`, must not be `None`")  # noqa: E501

        self._login = login

    @property
    def first_name(self) -> str:
        """Gets the first_name of this User.


        :return: The first_name of this User.
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name: str):
        """Sets the first_name of this User.


        :param first_name: The first_name of this User.
        :type first_name: str
        """

        self._first_name = first_name

    @property
    def last_name(self) -> str:
        """Gets the last_name of this User.


        :return: The last_name of this User.
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name: str):
        """Sets the last_name of this User.


        :param last_name: The last_name of this User.
        :type last_name: str
        """

        self._last_name = last_name

    @property
    def email(self) -> str:
        """Gets the email of this User.


        :return: The email of this User.
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email: str):
        """Sets the email of this User.


        :param email: The email of this User.
        :type email: str
        """

        self._email = email

    @property
    def activated(self) -> bool:
        """Gets the activated of this User.


        :return: The activated of this User.
        :rtype: bool
        """
        return self._activated

    @activated.setter
    def activated(self, activated: bool):
        """Sets the activated of this User.


        :param activated: The activated of this User.
        :type activated: bool
        """
        if activated is None:
            raise ValueError("Invalid value for `activated`, must not be `None`")  # noqa: E501

        self._activated = activated

    @property
    def lang_key(self) -> str:
        """Gets the lang_key of this User.


        :return: The lang_key of this User.
        :rtype: str
        """
        return self._lang_key

    @lang_key.setter
    def lang_key(self, lang_key: str):
        """Sets the lang_key of this User.


        :param lang_key: The lang_key of this User.
        :type lang_key: str
        """

        self._lang_key = lang_key

    @property
    def image_url(self) -> str:
        """Gets the image_url of this User.


        :return: The image_url of this User.
        :rtype: str
        """
        return self._image_url

    @image_url.setter
    def image_url(self, image_url: str):
        """Sets the image_url of this User.


        :param image_url: The image_url of this User.
        :type image_url: str
        """

        self._image_url = image_url

    @property
    def reset_date(self) -> datetime:
        """Gets the reset_date of this User.


        :return: The reset_date of this User.
        :rtype: datetime
        """
        return self._reset_date

    @reset_date.setter
    def reset_date(self, reset_date: datetime):
        """Sets the reset_date of this User.


        :param reset_date: The reset_date of this User.
        :type reset_date: datetime
        """

        self._reset_date = reset_date
