# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.admin_user_dto import AdminUserDTO  # noqa: E501
from swagger_server.models.key_and_password_vm import KeyAndPasswordVM  # noqa: E501
from swagger_server.models.managed_user_vm import ManagedUserVM  # noqa: E501
from swagger_server.models.password_change_dto import PasswordChangeDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestAccountResourceController(BaseTestCase):
    """AccountResourceController integration test stubs"""

    def test_activate_account(self):
        """Test case for activate_account

        
        """
        query_string = [('key', 'key_example')]
        response = self.client.open(
            '/api/activate',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_change_password(self):
        """Test case for change_password

        
        """
        body = PasswordChangeDTO()
        response = self.client.open(
            '/api/account/change-password',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_finish_password_reset(self):
        """Test case for finish_password_reset

        
        """
        body = KeyAndPasswordVM()
        response = self.client.open(
            '/api/account/reset-password/finish',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_account(self):
        """Test case for get_account

        
        """
        response = self.client.open(
            '/api/account',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_is_authenticated(self):
        """Test case for is_authenticated

        
        """
        response = self.client.open(
            '/api/authenticate',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_register_account(self):
        """Test case for register_account

        
        """
        body = ManagedUserVM()
        response = self.client.open(
            '/api/register',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_request_password_reset(self):
        """Test case for request_password_reset

        
        """
        body = 'body_example'
        response = self.client.open(
            '/api/account/reset-password/init',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_save_account(self):
        """Test case for save_account

        
        """
        body = AdminUserDTO()
        response = self.client.open(
            '/api/account',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
