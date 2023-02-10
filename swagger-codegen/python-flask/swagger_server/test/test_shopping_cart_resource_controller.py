# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.shopping_cart_dto import ShoppingCartDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestShoppingCartResourceController(BaseTestCase):
    """ShoppingCartResourceController integration test stubs"""

    def test_create_shopping_cart(self):
        """Test case for create_shopping_cart

        
        """
        body = ShoppingCartDTO()
        response = self.client.open(
            '/api/shopping-carts',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_shopping_cart(self):
        """Test case for delete_shopping_cart

        
        """
        response = self.client.open(
            '/api/shopping-carts/{id}'.format(id=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_shopping_carts(self):
        """Test case for get_all_shopping_carts

        
        """
        response = self.client.open(
            '/api/shopping-carts',
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_shopping_cart(self):
        """Test case for get_shopping_cart

        
        """
        response = self.client.open(
            '/api/shopping-carts/{id}'.format(id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_partial_update_shopping_cart(self):
        """Test case for partial_update_shopping_cart

        
        """
        body = ShoppingCartDTO()
        response = self.client.open(
            '/api/shopping-carts/{id}'.format(id=789),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_shopping_cart(self):
        """Test case for update_shopping_cart

        
        """
        body = ShoppingCartDTO()
        response = self.client.open(
            '/api/shopping-carts/{id}'.format(id=789),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
