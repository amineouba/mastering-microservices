import connexion
import six

from swagger_server.models.jwt_token import JWTToken  # noqa: E501
from swagger_server.models.login_vm import LoginVM  # noqa: E501
from swagger_server import util


def authorize(body):  # noqa: E501
    """authorize

     # noqa: E501

    :param body: 
    :type body: dict | bytes

    :rtype: JWTToken
    """
    if connexion.request.is_json:
        body = LoginVM.from_dict(connexion.request.get_json())  # noqa: E501
    return 'do some magic!'
