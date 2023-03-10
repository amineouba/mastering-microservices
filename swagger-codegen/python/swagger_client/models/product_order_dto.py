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


class ProductOrderDTO(object):
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
        'quantity': 'int',
        'total_price': 'float',
        'product': 'ProductDTO',
        'cart': 'ShoppingCartDTO'
    }

    attribute_map = {
        'id': 'id',
        'quantity': 'quantity',
        'total_price': 'totalPrice',
        'product': 'product',
        'cart': 'cart'
    }

    def __init__(self, id=None, quantity=None, total_price=None, product=None, cart=None):  # noqa: E501
        """ProductOrderDTO - a model defined in Swagger"""  # noqa: E501
        self._id = None
        self._quantity = None
        self._total_price = None
        self._product = None
        self._cart = None
        self.discriminator = None
        if id is not None:
            self.id = id
        self.quantity = quantity
        self.total_price = total_price
        if product is not None:
            self.product = product
        if cart is not None:
            self.cart = cart

    @property
    def id(self):
        """Gets the id of this ProductOrderDTO.  # noqa: E501


        :return: The id of this ProductOrderDTO.  # noqa: E501
        :rtype: int
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this ProductOrderDTO.


        :param id: The id of this ProductOrderDTO.  # noqa: E501
        :type: int
        """

        self._id = id

    @property
    def quantity(self):
        """Gets the quantity of this ProductOrderDTO.  # noqa: E501


        :return: The quantity of this ProductOrderDTO.  # noqa: E501
        :rtype: int
        """
        return self._quantity

    @quantity.setter
    def quantity(self, quantity):
        """Sets the quantity of this ProductOrderDTO.


        :param quantity: The quantity of this ProductOrderDTO.  # noqa: E501
        :type: int
        """
        if quantity is None:
            raise ValueError("Invalid value for `quantity`, must not be `None`")  # noqa: E501

        self._quantity = quantity

    @property
    def total_price(self):
        """Gets the total_price of this ProductOrderDTO.  # noqa: E501


        :return: The total_price of this ProductOrderDTO.  # noqa: E501
        :rtype: float
        """
        return self._total_price

    @total_price.setter
    def total_price(self, total_price):
        """Sets the total_price of this ProductOrderDTO.


        :param total_price: The total_price of this ProductOrderDTO.  # noqa: E501
        :type: float
        """
        if total_price is None:
            raise ValueError("Invalid value for `total_price`, must not be `None`")  # noqa: E501

        self._total_price = total_price

    @property
    def product(self):
        """Gets the product of this ProductOrderDTO.  # noqa: E501


        :return: The product of this ProductOrderDTO.  # noqa: E501
        :rtype: ProductDTO
        """
        return self._product

    @product.setter
    def product(self, product):
        """Sets the product of this ProductOrderDTO.


        :param product: The product of this ProductOrderDTO.  # noqa: E501
        :type: ProductDTO
        """

        self._product = product

    @property
    def cart(self):
        """Gets the cart of this ProductOrderDTO.  # noqa: E501


        :return: The cart of this ProductOrderDTO.  # noqa: E501
        :rtype: ShoppingCartDTO
        """
        return self._cart

    @cart.setter
    def cart(self, cart):
        """Sets the cart of this ProductOrderDTO.


        :param cart: The cart of this ProductOrderDTO.  # noqa: E501
        :type: ShoppingCartDTO
        """

        self._cart = cart

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
        if issubclass(ProductOrderDTO, dict):
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
        if not isinstance(other, ProductOrderDTO):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
