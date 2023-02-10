# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.jwt_token import JWTToken  # noqa: E501
from swagger_server.models.login_vm import LoginVM  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserJwtControllerController(BaseTestCase):
    """UserJwtControllerController integration test stubs"""

    def test_authorize(self):
        """Test case for authorize

        
        """
        body = LoginVM()
        response = self.client.open(
            '/api/authenticate',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
