# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.customer_details_dto import CustomerDetailsDTO  # noqa: F401,E501
from swagger_server import util


class ShoppingCartDTO(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, id: int=None, placed_date: datetime=None, status: str=None, total_price: float=None, payment_method: str=None, payment_reference: str=None, customer_details: CustomerDetailsDTO=None):  # noqa: E501
        """ShoppingCartDTO - a model defined in Swagger

        :param id: The id of this ShoppingCartDTO.  # noqa: E501
        :type id: int
        :param placed_date: The placed_date of this ShoppingCartDTO.  # noqa: E501
        :type placed_date: datetime
        :param status: The status of this ShoppingCartDTO.  # noqa: E501
        :type status: str
        :param total_price: The total_price of this ShoppingCartDTO.  # noqa: E501
        :type total_price: float
        :param payment_method: The payment_method of this ShoppingCartDTO.  # noqa: E501
        :type payment_method: str
        :param payment_reference: The payment_reference of this ShoppingCartDTO.  # noqa: E501
        :type payment_reference: str
        :param customer_details: The customer_details of this ShoppingCartDTO.  # noqa: E501
        :type customer_details: CustomerDetailsDTO
        """
        self.swagger_types = {
            'id': int,
            'placed_date': datetime,
            'status': str,
            'total_price': float,
            'payment_method': str,
            'payment_reference': str,
            'customer_details': CustomerDetailsDTO
        }

        self.attribute_map = {
            'id': 'id',
            'placed_date': 'placedDate',
            'status': 'status',
            'total_price': 'totalPrice',
            'payment_method': 'paymentMethod',
            'payment_reference': 'paymentReference',
            'customer_details': 'customerDetails'
        }
        self._id = id
        self._placed_date = placed_date
        self._status = status
        self._total_price = total_price
        self._payment_method = payment_method
        self._payment_reference = payment_reference
        self._customer_details = customer_details

    @classmethod
    def from_dict(cls, dikt) -> 'ShoppingCartDTO':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The ShoppingCartDTO of this ShoppingCartDTO.  # noqa: E501
        :rtype: ShoppingCartDTO
        """
        return util.deserialize_model(dikt, cls)

    @property
    def id(self) -> int:
        """Gets the id of this ShoppingCartDTO.


        :return: The id of this ShoppingCartDTO.
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id: int):
        """Sets the id of this ShoppingCartDTO.


        :param id: The id of this ShoppingCartDTO.
        :type id: int
        """

        self._id = id

    @property
    def placed_date(self) -> datetime:
        """Gets the placed_date of this ShoppingCartDTO.


        :return: The placed_date of this ShoppingCartDTO.
        :rtype: datetime
        """
        return self._placed_date

    @placed_date.setter
    def placed_date(self, placed_date: datetime):
        """Sets the placed_date of this ShoppingCartDTO.


        :param placed_date: The placed_date of this ShoppingCartDTO.
        :type placed_date: datetime
        """
        if placed_date is None:
            raise ValueError("Invalid value for `placed_date`, must not be `None`")  # noqa: E501

        self._placed_date = placed_date

    @property
    def status(self) -> str:
        """Gets the status of this ShoppingCartDTO.


        :return: The status of this ShoppingCartDTO.
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status: str):
        """Sets the status of this ShoppingCartDTO.


        :param status: The status of this ShoppingCartDTO.
        :type status: str
        """
        allowed_values = ["COMPLETED", "PAID", "PENDING", "CANCELLED", "REFUNDED"]  # noqa: E501
        if status not in allowed_values:
            raise ValueError(
                "Invalid value for `status` ({0}), must be one of {1}"
                .format(status, allowed_values)
            )

        self._status = status

    @property
    def total_price(self) -> float:
        """Gets the total_price of this ShoppingCartDTO.


        :return: The total_price of this ShoppingCartDTO.
        :rtype: float
        """
        return self._total_price

    @total_price.setter
    def total_price(self, total_price: float):
        """Sets the total_price of this ShoppingCartDTO.


        :param total_price: The total_price of this ShoppingCartDTO.
        :type total_price: float
        """
        if total_price is None:
            raise ValueError("Invalid value for `total_price`, must not be `None`")  # noqa: E501

        self._total_price = total_price

    @property
    def payment_method(self) -> str:
        """Gets the payment_method of this ShoppingCartDTO.


        :return: The payment_method of this ShoppingCartDTO.
        :rtype: str
        """
        return self._payment_method

    @payment_method.setter
    def payment_method(self, payment_method: str):
        """Sets the payment_method of this ShoppingCartDTO.


        :param payment_method: The payment_method of this ShoppingCartDTO.
        :type payment_method: str
        """
        allowed_values = ["CREDIT_CARD", "IDEAL"]  # noqa: E501
        if payment_method not in allowed_values:
            raise ValueError(
                "Invalid value for `payment_method` ({0}), must be one of {1}"
                .format(payment_method, allowed_values)
            )

        self._payment_method = payment_method

    @property
    def payment_reference(self) -> str:
        """Gets the payment_reference of this ShoppingCartDTO.


        :return: The payment_reference of this ShoppingCartDTO.
        :rtype: str
        """
        return self._payment_reference

    @payment_reference.setter
    def payment_reference(self, payment_reference: str):
        """Sets the payment_reference of this ShoppingCartDTO.


        :param payment_reference: The payment_reference of this ShoppingCartDTO.
        :type payment_reference: str
        """

        self._payment_reference = payment_reference

    @property
    def customer_details(self) -> CustomerDetailsDTO:
        """Gets the customer_details of this ShoppingCartDTO.


        :return: The customer_details of this ShoppingCartDTO.
        :rtype: CustomerDetailsDTO
        """
        return self._customer_details

    @customer_details.setter
    def customer_details(self, customer_details: CustomerDetailsDTO):
        """Sets the customer_details of this ShoppingCartDTO.


        :param customer_details: The customer_details of this ShoppingCartDTO.
        :type customer_details: CustomerDetailsDTO
        """

        self._customer_details = customer_details
