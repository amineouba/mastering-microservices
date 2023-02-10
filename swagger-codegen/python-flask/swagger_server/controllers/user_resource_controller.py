import connexion
import six

from swagger_server.models.admin_user_dto import AdminUserDTO  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server import util


def create_user(body):  # noqa: E501
    """create_user

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: User
    """
    if connexion.request.is_json:
        body = AdminUserDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def delete_user(login):  # noqa: E501
    """delete_user

     # noqa: E501

    :param login: 
    :type login: str

    :rtype: None
    """
    return 'do some magic!'


def get_all_users(page=None, size=None, sort=None):  # noqa: E501
    """get_all_users

     # noqa: E501

    :param page: Zero-based page index (0..N)
    :type page: int
    :param size: The size of the page to be returned
    :type size: int
    :param sort: Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
    :type sort: List[str]

    :rtype: List[AdminUserDTO]
    """
    return 'do some magic!'


def get_user(login):  # noqa: E501
    """get_user

     # noqa: E501

    :param login: 
    :type login: str

    :rtype: AdminUserDTO
    """
    return 'do some magic!'


def update_user(body):  # noqa: E501
    """update_user

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: AdminUserDTO
    """
    if connexion.request.is_json:
        body = AdminUserDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
