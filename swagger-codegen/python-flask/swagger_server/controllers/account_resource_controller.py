import connexion
import six

from swagger_server.models.admin_user_dto import AdminUserDTO  # noqa: E501
from swagger_server.models.key_and_password_vm import KeyAndPasswordVM  # noqa: E501
from swagger_server.models.managed_user_vm import ManagedUserVM  # noqa: E501
from swagger_server.models.password_change_dto import PasswordChangeDTO  # noqa: E501
from swagger_server import util


def activate_account(key):  # noqa: E501
    """activate_account

     # noqa: E501

    :param key: 
    :type key: str

    :rtype: None
    """
    return 'do some magic!'


def change_password(body):  # noqa: E501
    """change_password

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = PasswordChangeDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def finish_password_reset(body):  # noqa: E501
    """finish_password_reset

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = KeyAndPasswordVM.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def get_account():  # noqa: E501
    """get_account

     # noqa: E501


    :rtype: AdminUserDTO
    """
    return 'do some magic!'


def is_authenticated():  # noqa: E501
    """is_authenticated

     # noqa: E501


    :rtype: str
    """
    return 'do some magic!'


def register_account(body):  # noqa: E501
    """register_account

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = ManagedUserVM.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def request_password_reset(body):  # noqa: E501
    """request_password_reset

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = str.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'


def save_account(body):  # noqa: E501
    """save_account

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: None
    """
    if connexion.request.is_json:
        body = AdminUserDTO.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
