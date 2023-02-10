# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.admin_user_dto import AdminUserDTO  # noqa: E501
from swagger_server.models.user import User  # noqa: E501
from swagger_server.test import BaseTestCase


class TestUserResourceController(BaseTestCase):
    """UserResourceController integration test stubs"""

    def test_create_user(self):
        """Test case for create_user

        
        """
        body = AdminUserDTO()
        response = self.client.open(
            '/api/admin/users',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_user(self):
        """Test case for delete_user

        
        """
        response = self.client.open(
            '/api/admin/users/{login}'.format(login='login_example'),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_users(self):
        """Test case for get_all_users

        
        """
        query_string = [('page', 1),
                        ('size', 2),
                        ('sort', 'sort_example')]
        response = self.client.open(
            '/api/admin/users',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_user(self):
        """Test case for get_user

        
        """
        response = self.client.open(
            '/api/admin/users/{login}'.format(login='login_example'),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_user(self):
        """Test case for update_user

        
        """
        body = AdminUserDTO()
        response = self.client.open(
            '/api/admin/users',
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
