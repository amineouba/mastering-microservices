# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.user_dto import UserDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestPublicUserResourceController(BaseTestCase):
    """PublicUserResourceController integration test stubs"""

    def test_get_all_public_users(self):
        """Test case for get_all_public_users

        
        """
        query_string = [('page', 1),
                        ('size', 2),
                        ('sort', 'sort_example')]
        response = self.client.open(
            '/api/users',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_authorities(self):
        """Test case for get_authorities

        
        """
        response = self.client.open(
            '/api/authorities',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
