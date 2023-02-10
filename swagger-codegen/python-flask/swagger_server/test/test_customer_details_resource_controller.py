# coding: utf-8

from __future__ import absolute_import

from flask import json
from six import BytesIO

from swagger_server.models.customer_details_dto import CustomerDetailsDTO  # noqa: E501
from swagger_server.test import BaseTestCase


class TestCustomerDetailsResourceController(BaseTestCase):
    """CustomerDetailsResourceController integration test stubs"""

    def test_create_customer_details(self):
        """Test case for create_customer_details

        
        """
        body = CustomerDetailsDTO()
        response = self.client.open(
            '/api/customer-details',
            method='POST',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_delete_customer_details(self):
        """Test case for delete_customer_details

        
        """
        response = self.client.open(
            '/api/customer-details/{id}'.format(id=789),
            method='DELETE')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_all_customer_details(self):
        """Test case for get_all_customer_details

        
        """
        query_string = [('page', 1),
                        ('size', 2),
                        ('sort', 'sort_example'),
                        ('eagerload', false)]
        response = self.client.open(
            '/api/customer-details',
            method='GET',
            query_string=query_string)
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_get_customer_details(self):
        """Test case for get_customer_details

        
        """
        response = self.client.open(
            '/api/customer-details/{id}'.format(id=789),
            method='GET')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_partial_update_customer_details(self):
        """Test case for partial_update_customer_details

        
        """
        body = CustomerDetailsDTO()
        response = self.client.open(
            '/api/customer-details/{id}'.format(id=789),
            method='PATCH',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))

    def test_update_customer_details(self):
        """Test case for update_customer_details

        
        """
        body = CustomerDetailsDTO()
        response = self.client.open(
            '/api/customer-details/{id}'.format(id=789),
            method='PUT',
            data=json.dumps(body),
            content_type='application/json')
        self.assert200(response,
                       'Response body is : ' + response.data.decode('utf-8'))


if __name__ == '__main__':
    import unittest
    unittest.main()
