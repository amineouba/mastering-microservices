# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.user_dto import UserDTO  # noqa: F401,E501
from swagger_server import util


class CustomerDetailsDTO(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, gender: str=None, phone: str=None, address_line1: str=None, address_line2: str=None, city: str=None, country: str=None, latitude: float=None, longitude: float=None, geohash: str=None, olc: str=None, user: UserDTO=None):  # noqa: E501
        """CustomerDetailsDTO - a model defined in Swagger

        :param id: The id of this CustomerDetailsDTO.  # noqa: E501
        :type id: int
        :param gender: The gender of this CustomerDetailsDTO.  # noqa: E501
        :type gender: str
        :param phone: The phone of this CustomerDetailsDTO.  # noqa: E501
        :type phone: str
        :param address_line1: The address_line1 of this CustomerDetailsDTO.  # noqa: E501
        :type address_line1: str
        :param address_line2: The address_line2 of this CustomerDetailsDTO.  # noqa: E501
        :type address_line2: str
        :param city: The city of this CustomerDetailsDTO.  # noqa: E501
        :type city: str
        :param country: The country of this CustomerDetailsDTO.  # noqa: E501
        :type country: str
        :param latitude: The latitude of this CustomerDetailsDTO.  # noqa: E501
        :type latitude: float
        :param longitude: The longitude of this CustomerDetailsDTO.  # noqa: E501
        :type longitude: float
        :param geohash: The geohash of this CustomerDetailsDTO.  # noqa: E501
        :type geohash: str
        :param olc: The olc of this CustomerDetailsDTO.  # noqa: E501
        :type olc: str
        :param user: The user of this CustomerDetailsDTO.  # noqa: E501
        :type user: UserDTO
        """
        self.swagger_types = {
            'id': int,
            'gender': str,
            'phone': str,
            'address_line1': str,
            'address_line2': str,
            'city': str,
            'country': str,
            'latitude': float,
            'longitude': float,
            'geohash': str,
            'olc': str,
            'user': UserDTO
        }

        self.attribute_map = {
            'id': 'id',
            'gender': 'gender',
            'phone': 'phone',
            'address_line1': 'addressLine1',
            'address_line2': 'addressLine2',
            'city': 'city',
            'country': 'country',
            'latitude': 'latitude',
            'longitude': 'longitude',
            'geohash': 'geohash',
            'olc': 'olc',
            'user': 'user'
        }
        self._id = id
        self._gender = gender
        self._phone = phone
        self._address_line1 = address_line1
        self._address_line2 = address_line2
        self._city = city
        self._country = country
        self._latitude = latitude
        self._longitude = longitude
        self._geohash = geohash
        self._olc = olc
        self._user = user

    @classmethod
    def from_dict(cls, dikt) -> 'CustomerDetailsDTO':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The CustomerDetailsDTO of this CustomerDetailsDTO.  # noqa: E501
        :rtype: CustomerDetailsDTO
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this CustomerDetailsDTO.


        :return: The id of this CustomerDetailsDTO.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this CustomerDetailsDTO.


        :param id: The id of this CustomerDetailsDTO.
        :type id: int
        """

        self._id = id

    @property
    def gender(self) -> str:
        """Gets the gender of this CustomerDetailsDTO.


        :return: The gender of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._gender

    @gender.setter
    def gender(self, gender: str):
        """Sets the gender of this CustomerDetailsDTO.


        :param gender: The gender of this CustomerDetailsDTO.
        :type gender: str
        """
        allowed_values = ["MALE", "FEMALE", "OTHER"]  # noqa: E501
        if gender not in allowed_values:
            raise ValueError(
                "Invalid value for `gender` ({0}), must be one of {1}"
                .format(gender, allowed_values)
            )

        self._gender = gender

    @property
    def phone(self) -> str:
        """Gets the phone of this CustomerDetailsDTO.


        :return: The phone of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._phone

    @phone.setter
    def phone(self, phone: str):
        """Sets the phone of this CustomerDetailsDTO.


        :param phone: The phone of this CustomerDetailsDTO.
        :type phone: str
        """
        if phone is None:
            raise ValueError("Invalid value for `phone`, must not be `None`")  # noqa: E501

        self._phone = phone

    @property
    def address_line1(self) -> str:
        """Gets the address_line1 of this CustomerDetailsDTO.


        :return: The address_line1 of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._address_line1

    @address_line1.setter
    def address_line1(self, address_line1: str):
        """Sets the address_line1 of this CustomerDetailsDTO.


        :param address_line1: The address_line1 of this CustomerDetailsDTO.
        :type address_line1: str
        """
        if address_line1 is None:
            raise ValueError("Invalid value for `address_line1`, must not be `None`")  # noqa: E501

        self._address_line1 = address_line1

    @property
    def address_line2(self) -> str:
        """Gets the address_line2 of this CustomerDetailsDTO.


        :return: The address_line2 of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._address_line2

    @address_line2.setter
    def address_line2(self, address_line2: str):
        """Sets the address_line2 of this CustomerDetailsDTO.


        :param address_line2: The address_line2 of this CustomerDetailsDTO.
        :type address_line2: str
        """

        self._address_line2 = address_line2

    @property
    def city(self) -> str:
        """Gets the city of this CustomerDetailsDTO.


        :return: The city of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._city

    @city.setter
    def city(self, city: str):
        """Sets the city of this CustomerDetailsDTO.


        :param city: The city of this CustomerDetailsDTO.
        :type city: str
        """
        if city is None:
            raise ValueError("Invalid value for `city`, must not be `None`")  # noqa: E501

        self._city = city

    @property
    def country(self) -> str:
        """Gets the country of this CustomerDetailsDTO.


        :return: The country of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country: str):
        """Sets the country of this CustomerDetailsDTO.


        :param country: The country of this CustomerDetailsDTO.
        :type country: str
        """
        if country is None:
            raise ValueError("Invalid value for `country`, must not be `None`")  # noqa: E501

        self._country = country

    @property
    def latitude(self) -> float:
        """Gets the latitude of this CustomerDetailsDTO.


        :return: The latitude of this CustomerDetailsDTO.
        :rtype: float
        """
        return self._latitude

    @latitude.setter
    def latitude(self, latitude: float):
        """Sets the latitude of this CustomerDetailsDTO.


        :param latitude: The latitude of this CustomerDetailsDTO.
        :type latitude: float
        """

        self._latitude = latitude

    @property
    def longitude(self) -> float:
        """Gets the longitude of this CustomerDetailsDTO.


        :return: The longitude of this CustomerDetailsDTO.
        :rtype: float
        """
        return self._longitude

    @longitude.setter
    def longitude(self, longitude: float):
        """Sets the longitude of this CustomerDetailsDTO.


        :param longitude: The longitude of this CustomerDetailsDTO.
        :type longitude: float
        """

        self._longitude = longitude

    @property
    def geohash(self) -> str:
        """Gets the geohash of this CustomerDetailsDTO.


        :return: The geohash of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._geohash

    @geohash.setter
    def geohash(self, geohash: str):
        """Sets the geohash of this CustomerDetailsDTO.


        :param geohash: The geohash of this CustomerDetailsDTO.
        :type geohash: str
        """

        self._geohash = geohash

    @property
    def olc(self) -> str:
        """Gets the olc of this CustomerDetailsDTO.


        :return: The olc of this CustomerDetailsDTO.
        :rtype: str
        """
        return self._olc

    @olc.setter
    def olc(self, olc: str):
        """Sets the olc of this CustomerDetailsDTO.


        :param olc: The olc of this CustomerDetailsDTO.
        :type olc: str
        """

        self._olc = olc

    @property
    def user(self) -> UserDTO:
        """Gets the user of this CustomerDetailsDTO.


        :return: The user of this CustomerDetailsDTO.
        :rtype: UserDTO
        """
        return self._user

    @user.setter
    def user(self, user: UserDTO):
        """Sets the user of this CustomerDetailsDTO.


        :param user: The user of this CustomerDetailsDTO.
        :type user: UserDTO
        """

        self._user = user
