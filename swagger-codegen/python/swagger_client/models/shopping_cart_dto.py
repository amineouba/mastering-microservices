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


class ShoppingCartDTO(object):
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
        'placed_date': 'datetime',
        'status': 'str',
        'total_price': 'float',
        'payment_method': 'str',
        'payment_reference': 'str',
        'customer_details': 'CustomerDetailsDTO'
    }

    attribute_map = {
        'id': 'id',
        'placed_date': 'placedDate',
        'status': 'status',
        'total_price': 'totalPrice',
        'payment_method': 'paymentMethod',
        'payment_reference': 'paymentReference',
        'customer_details': 'customerDetails'
    }

    def __init__(self, id=None, placed_date=None, status=None, total_price=None, payment_method=None, payment_reference=None, customer_details=None):  # noqa: E501
        """ShoppingCartDTO - a model defined in Swagger"""  # noqa: E501
        self._id = None
        self._placed_date = None
        self._status = None
        self._total_price = None
        self._payment_method = None
        self._payment_reference = None
        self._customer_details = None
        self.discriminator = None
        if id is not None:
            self.id = id
        self.placed_date = placed_date
        self.status = status
        self.total_price = total_price
        self.payment_method = payment_method
        if payment_reference is not None:
            self.payment_reference = payment_reference
        if customer_details is not None:
            self.customer_details = customer_details

    @property
    def id(self):
        """Gets the id of this ShoppingCartDTO.  # noqa: E501


        :return: The id of this ShoppingCartDTO.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ShoppingCartDTO.


        :param id: The id of this ShoppingCartDTO.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def placed_date(self):
        """Gets the placed_date of this ShoppingCartDTO.  # noqa: E501


        :return: The placed_date of this ShoppingCartDTO.  # noqa: E501
        :rtype: datetime
        """
        return self._placed_date

    @placed_date.setter
    def placed_date(self, placed_date):
        """Sets the placed_date of this ShoppingCartDTO.


        :param placed_date: The placed_date of this ShoppingCartDTO.  # noqa: E501
        :type: datetime
        """
        if placed_date is None:
            raise ValueError("Invalid value for `placed_date`, must not be `None`")  # noqa: E501

        self._placed_date = placed_date

    @property
    def status(self):
        """Gets the status of this ShoppingCartDTO.  # noqa: E501


        :return: The status of this ShoppingCartDTO.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this ShoppingCartDTO.


        :param status: The status of this ShoppingCartDTO.  # noqa: E501
        :type: str
        """
        if status is None:
            raise ValueError("Invalid value for `status`, must not be `None`")  # noqa: E501
        allowed_values = ["COMPLETED", "PAID", "PENDING", "CANCELLED", "REFUNDED"]  # noqa: E501
        if status not in allowed_values:
            raise ValueError(
                "Invalid value for `status` ({0}), must be one of {1}"  # noqa: E501
                .format(status, allowed_values)
            )

        self._status = status

    @property
    def total_price(self):
        """Gets the total_price of this ShoppingCartDTO.  # noqa: E501


        :return: The total_price of this ShoppingCartDTO.  # noqa: E501
        :rtype: float
        """
        return self._total_price

    @total_price.setter
    def total_price(self, total_price):
        """Sets the total_price of this ShoppingCartDTO.


        :param total_price: The total_price of this ShoppingCartDTO.  # noqa: E501
        :type: float
        """
        if total_price is None:
            raise ValueError("Invalid value for `total_price`, must not be `None`")  # noqa: E501

        self._total_price = total_price

    @property
    def payment_method(self):
        """Gets the payment_method of this ShoppingCartDTO.  # noqa: E501


        :return: The payment_method of this ShoppingCartDTO.  # noqa: E501
        :rtype: str
        """
        return self._payment_method

    @payment_method.setter
    def payment_method(self, payment_method):
        """Sets the payment_method of this ShoppingCartDTO.


        :param payment_method: The payment_method of this ShoppingCartDTO.  # noqa: E501
        :type: str
        """
        if payment_method is None:
            raise ValueError("Invalid value for `payment_method`, must not be `None`")  # noqa: E501
        allowed_values = ["CREDIT_CARD", "IDEAL"]  # noqa: E501
        if payment_method not in allowed_values:
            raise ValueError(
                "Invalid value for `payment_method` ({0}), must be one of {1}"  # noqa: E501
                .format(payment_method, allowed_values)
            )

        self._payment_method = payment_method

    @property
    def payment_reference(self):
        """Gets the payment_reference of this ShoppingCartDTO.  # noqa: E501


        :return: The payment_reference of this ShoppingCartDTO.  # noqa: E501
        :rtype: str
        """
        return self._payment_reference

    @payment_reference.setter
    def payment_reference(self, payment_reference):
        """Sets the payment_reference of this ShoppingCartDTO.


        :param payment_reference: The payment_reference of this ShoppingCartDTO.  # noqa: E501
        :type: str
        """

        self._payment_reference = payment_reference

    @property
    def customer_details(self):
        """Gets the customer_details of this ShoppingCartDTO.  # noqa: E501


        :return: The customer_details of this ShoppingCartDTO.  # noqa: E501
        :rtype: CustomerDetailsDTO
        """
        return self._customer_details

    @customer_details.setter
    def customer_details(self, customer_details):
        """Sets the customer_details of this ShoppingCartDTO.


        :param customer_details: The customer_details of this ShoppingCartDTO.  # noqa: E501
        :type: CustomerDetailsDTO
        """

        self._customer_details = customer_details

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
        if issubclass(ShoppingCartDTO, dict):
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
        if not isinstance(other, ShoppingCartDTO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
