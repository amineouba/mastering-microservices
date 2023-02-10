# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.product_order_dto import ProductOrderDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestProductOrderResourceController(BaseTestCase):
    """ProductOrderResourceController integration test stubs"""

    def test_create_product_order(self):
        """Test case for create_product_order

        
        """
        body = ProductOrderDTO()
        response = self.client.open(
            '/api/product-orders',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_product_order(self):
        """Test case for delete_product_order

        
        """
        response = self.client.open(
            '/api/product-orders/{id}'.format(id=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_product_orders(self):
        """Test case for get_all_product_orders

        
        """
        query_string = [('eagerload', false)]
        response = self.client.open(
            '/api/product-orders',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_product_order(self):
        """Test case for get_product_order

        
        """
        response = self.client.open(
            '/api/product-orders/{id}'.format(id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_partial_update_product_order(self):
        """Test case for partial_update_product_order

        
        """
        body = ProductOrderDTO()
        response = self.client.open(
            '/api/product-orders/{id}'.format(id=789),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_product_order(self):
        """Test case for update_product_order

        
        """
        body = ProductOrderDTO()
        response = self.client.open(
            '/api/product-orders/{id}'.format(id=789),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
