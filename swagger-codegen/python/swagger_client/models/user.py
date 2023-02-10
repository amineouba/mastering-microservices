# coding: utf-8

"""
    Store API

    Store API documentation  # noqa: E501

    OpenAPI spec version: 0.0.1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""

import pprint
import re  # noqa: F401

import six


class User(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'id': 'int',
        'login': 'str',
        'first_name': 'str',
        'last_name': 'str',
        'email': 'str',
        'activated': 'bool',
        'lang_key': 'str',
        'image_url': 'str',
        'reset_date': 'datetime'
    }

    attribute_map = {
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

    def __init__(self, id=None, login=None, first_name=None, last_name=None, email=None, activated=None, lang_key=None, image_url=None, reset_date=None):  # noqa: E501
        """User - a model defined in Swagger"""  # noqa: E501
        self._id = None
        self._login = None
        self._first_name = None
        self._last_name = None
        self._email = None
        self._activated = None
        self._lang_key = None
        self._image_url = None
        self._reset_date = None
        self.discriminator = None
        if id is not None:
            self.id = id
        self.login = login
        if first_name is not None:
            self.first_name = first_name
        if last_name is not None:
            self.last_name = last_name
        if email is not None:
            self.email = email
        self.activated = activated
        if lang_key is not None:
            self.lang_key = lang_key
        if image_url is not None:
            self.image_url = image_url
        if reset_date is not None:
            self.reset_date = reset_date

    @property
    def id(self):
        """Gets the id of this User.  # noqa: E501


        :return: The id of this User.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this User.


        :param id: The id of this User.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def login(self):
        """Gets the login of this User.  # noqa: E501


        :return: The login of this User.  # noqa: E501
        :rtype: str
        """
        return self._login

    @login.setter
    def login(self, login):
        """Sets the login of this User.


        :param login: The login of this User.  # noqa: E501
        :type: str
        """
        if login is None:
            raise ValueError("Invalid value for `login`, must not be `None`")  # noqa: E501

        self._login = login

    @property
    def first_name(self):
        """Gets the first_name of this User.  # noqa: E501


        :return: The first_name of this User.  # noqa: E501
        :rtype: str
        """
        return self._first_name

    @first_name.setter
    def first_name(self, first_name):
        """Sets the first_name of this User.


        :param first_name: The first_name of this User.  # noqa: E501
        :type: str
        """

        self._first_name = first_name

    @property
    def last_name(self):
        """Gets the last_name of this User.  # noqa: E501


        :return: The last_name of this User.  # noqa: E501
        :rtype: str
        """
        return self._last_name

    @last_name.setter
    def last_name(self, last_name):
        """Sets the last_name of this User.


        :param last_name: The last_name of this User.  # noqa: E501
        :type: str
        """

        self._last_name = last_name

    @property
    def email(self):
        """Gets the email of this User.  # noqa: E501


        :return: The email of this User.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this User.


        :param email: The email of this User.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def activated(self):
        """Gets the activated of this User.  # noqa: E501


        :return: The activated of this User.  # noqa: E501
        :rtype: bool
        """
        return self._activated

    @activated.setter
    def activated(self, activated):
        """Sets the activated of this User.


        :param activated: The activated of this User.  # noqa: E501
        :type: bool
        """
        if activated is None:
            raise ValueError("Invalid value for `activated`, must not be `None`")  # noqa: E501

        self._activated = activated

    @property
    def lang_key(self):
        """Gets the lang_key of this User.  # noqa: E501


        :return: The lang_key of this User.  # noqa: E501
        :rtype: str
        """
        return self._lang_key

    @lang_key.setter
    def lang_key(self, lang_key):
        """Sets the lang_key of this User.


        :param lang_key: The lang_key of this User.  # noqa: E501
        :type: str
        """

        self._lang_key = lang_key

    @property
    def image_url(self):
        """Gets the image_url of this User.  # noqa: E501


        :return: The image_url of this User.  # noqa: E501
        :rtype: str
        """
        return self._image_url

    @image_url.setter
    def image_url(self, image_url):
        """Sets the image_url of this User.


        :param image_url: The image_url of this User.  # noqa: E501
        :type: str
        """

        self._image_url = image_url

    @property
    def reset_date(self):
        """Gets the reset_date of this User.  # noqa: E501


        :return: The reset_date of this User.  # noqa: E501
        :rtype: datetime
        """
        return self._reset_date

    @reset_date.setter
    def reset_date(self, reset_date):
        """Sets the reset_date of this User.


        :param reset_date: The reset_date of this User.  # noqa: E501
        :type: datetime
        """

        self._reset_date = reset_date

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(User, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, User):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
