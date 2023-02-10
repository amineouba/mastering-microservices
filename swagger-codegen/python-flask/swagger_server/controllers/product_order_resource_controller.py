import connexion
import six

from swagger_server.models.product_order_dto import ProductOrderDTO  # noqa: E501
from swagger_server import util


def create_product_order(body):  # noqa: E501
    """create_product_order

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: ProductOrderDTO
    """
    if connexion.request.is_json:
        body = ProductOrderDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_product_order(id):  # noqa: E501
    """delete_product_order

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_all_product_orders(eagerload=None):  # noqa: E501
    """get_all_product_orders

     # noqa: E501

    :param eagerload: 
    :type eagerload: bool

    :rtype: List[ProductOrderDTO]
    """
    return 'do some magic!'


def get_product_order(id):  # noqa: E501
    """get_product_order

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: ProductOrderDTO
    """
    return 'do some magic!'


def partial_update_product_order(body, id):  # noqa: E501
    """partial_update_product_order

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductOrderDTO
    """
    if connexion.request.is_json:
        body = ProductOrderDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_product_order(body, id):  # noqa: E501
    """update_product_order

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductOrderDTO
    """
    if connexion.request.is_json:
        body = ProductOrderDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
