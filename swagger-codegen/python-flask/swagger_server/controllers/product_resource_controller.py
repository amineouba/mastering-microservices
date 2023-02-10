import connexion
import six

from swagger_server.models.product_dto import ProductDTO  # noqa: E501
from swagger_server import util


def create_product(body):  # noqa: E501
    """create_product

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: ProductDTO
    """
    if connexion.request.is_json:
        body = ProductDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_product(id):  # noqa: E501
    """delete_product

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_all_products(page=None, size=None, sort=None, eagerload=None):  # noqa: E501
    """get_all_products

     # noqa: E501

    :param page: Zero-based page index (0..N)
    :type page: int
    :param size: The size of the page to be returned
    :type size: int
    :param sort: Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
    :type sort: List[str]
    :param eagerload: 
    :type eagerload: bool

    :rtype: List[ProductDTO]
    """
    return 'do some magic!'


def get_product(id):  # noqa: E501
    """get_product

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: ProductDTO
    """
    return 'do some magic!'


def partial_update_product(body, id):  # noqa: E501
    """partial_update_product

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductDTO
    """
    if connexion.request.is_json:
        body = ProductDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_product(body, id):  # noqa: E501
    """update_product

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductDTO
    """
    if connexion.request.is_json:
        body = ProductDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
