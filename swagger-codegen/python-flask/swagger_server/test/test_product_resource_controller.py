# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.product_dto import ProductDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestProductResourceController(BaseTestCase):
    """ProductResourceController integration test stubs"""

    def test_create_product(self):
        """Test case for create_product

        
        """
        body = ProductDTO()
        response = self.client.open(
            '/api/products',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_product(self):
        """Test case for delete_product

        
        """
        response = self.client.open(
            '/api/products/{id}'.format(id=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_products(self):
        """Test case for get_all_products

        
        """
        query_string = [('page', 1),
                        ('size', 2),
                        ('sort', 'sort_example'),
                        ('eagerload', false)]
        response = self.client.open(
            '/api/products',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_product(self):
        """Test case for get_product

        
        """
        response = self.client.open(
            '/api/products/{id}'.format(id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_partial_update_product(self):
        """Test case for partial_update_product

        
        """
        body = ProductDTO()
        response = self.client.open(
            '/api/products/{id}'.format(id=789),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_product(self):
        """Test case for update_product

        
        """
        body = ProductDTO()
        response = self.client.open(
            '/api/products/{id}'.format(id=789),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
