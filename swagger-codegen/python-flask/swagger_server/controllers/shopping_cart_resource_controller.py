import connexion
import six

from swagger_server.models.shopping_cart_dto import ShoppingCartDTO  # noqa: E501
from swagger_server import util


def create_shopping_cart(body):  # noqa: E501
    """create_shopping_cart

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: ShoppingCartDTO
    """
    if connexion.request.is_json:
        body = ShoppingCartDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_shopping_cart(id):  # noqa: E501
    """delete_shopping_cart

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_all_shopping_carts():  # noqa: E501
    """get_all_shopping_carts

     # noqa: E501


    :rtype: List[ShoppingCartDTO]
    """
    return 'do some magic!'


def get_shopping_cart(id):  # noqa: E501
    """get_shopping_cart

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: ShoppingCartDTO
    """
    return 'do some magic!'


def partial_update_shopping_cart(body, id):  # noqa: E501
    """partial_update_shopping_cart

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ShoppingCartDTO
    """
    if connexion.request.is_json:
        body = ShoppingCartDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_shopping_cart(body, id):  # noqa: E501
    """update_shopping_cart

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ShoppingCartDTO
    """
    if connexion.request.is_json:
        body = ShoppingCartDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
