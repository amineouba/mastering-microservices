import connexion
import six

from swagger_server.models.customer_details_dto import CustomerDetailsDTO  # noqa: E501
from swagger_server import util


def create_customer_details(body):  # noqa: E501
    """create_customer_details

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: CustomerDetailsDTO
    """
    if connexion.request.is_json:
        body = CustomerDetailsDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_customer_details(id):  # noqa: E501
    """delete_customer_details

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: None
    """
    return 'do some magic!'


def get_all_customer_details(page=None, size=None, sort=None, eagerload=None):  # noqa: E501
    """get_all_customer_details

     # noqa: E501

    :param page: Zero-based page index (0..N)
    :type page: int
    :param size: The size of the page to be returned
    :type size: int
    :param sort: Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
    :type sort: List[str]
    :param eagerload: 
    :type eagerload: bool

    :rtype: List[CustomerDetailsDTO]
    """
    return 'do some magic!'


def get_customer_details(id):  # noqa: E501
    """get_customer_details

     # noqa: E501

    :param id: 
    :type id: int

    :rtype: CustomerDetailsDTO
    """
    return 'do some magic!'


def partial_update_customer_details(body, id):  # noqa: E501
    """partial_update_customer_details

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: CustomerDetailsDTO
    """
    if connexion.request.is_json:
        body = CustomerDetailsDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def update_customer_details(body, id):  # noqa: E501
    """update_customer_details

     # noqa: E501

    :param body: 
    :type body: dict | bytes
    :param id: 
    :type id: int

    :rtype: CustomerDetailsDTO
    """
    if connexion.request.is_json:
        body = CustomerDetailsDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
