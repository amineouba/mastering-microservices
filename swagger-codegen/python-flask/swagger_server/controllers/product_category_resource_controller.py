import connexion
import six

from swagger_server.models.product_category_dto import ProductCategoryDTO  # noqa: E501
from swagger_server import util


def create_product_category(body):  # noqa: E501
    """create_product_category

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: ProductCategoryDTO
    """
    if connexion.request.is_json:
        body = ProductCategoryDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_product_category(id):  # noqa: E501
    """delete_product_category

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_all_product_categories(page=None, size=None, sort=None):  # noqa: E501
    """get_all_product_categories

     # noqa: E501

    :param page: Zero-based page index (0..N)
    :type page: int
    :param size: The size of the page to be returned
    :type size: int
    :param sort: Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
    :type sort: List[str]

    :rtype: List[ProductCategoryDTO]
    """
    return 'do some magic!'


def get_product_category(id):  # noqa: E501
    """get_product_category

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: ProductCategoryDTO
    """
    return 'do some magic!'


def partial_update_product_category(body, id):  # noqa: E501
    """partial_update_product_category

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductCategoryDTO
    """
    if connexion.request.is_json:
        body = ProductCategoryDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_product_category(body, id):  # noqa: E501
    """update_product_category

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: ProductCategoryDTO
    """
    if connexion.request.is_json:
        body = ProductCategoryDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
