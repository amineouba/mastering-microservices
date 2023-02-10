import connexion
import six

from swagger_server.models.user_dto import UserDTO  # noqa: E501
from swagger_server import util


def get_all_public_users(page=None, size=None, sort=None):  # noqa: E501
    """get_all_public_users

     # noqa: E501

    :param page: Zero-based page index (0..N)
    :type page: int
    :param size: The size of the page to be returned
    :type size: int
    :param sort: Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
    :type sort: List[str]

    :rtype: List[UserDTO]
    """
    return 'do some magic!'


def get_authorities():  # noqa: E501
    """get_authorities

     # noqa: E501


    :rtype: List[str]
    """
    return 'do some magic!'
