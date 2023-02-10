package io.swagger.api;

import io.swagger.model.AdminUserDTO;
import io.swagger.model.CustomerDetailsDTO;
import io.swagger.model.JWTToken;
import io.swagger.model.KeyAndPasswordVM;
import io.swagger.model.LoginVM;
import io.swagger.model.ManagedUserVM;
import io.swagger.model.PasswordChangeDTO;
import io.swagger.model.ProductCategoryDTO;
import io.swagger.model.ProductDTO;
import io.swagger.model.ProductOrderDTO;
import io.swagger.model.ShoppingCartDTO;
import io.swagger.model.User;
import io.swagger.model.UserDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.swagger.annotations.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.constraints.*;
import javax.validation.Valid;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;
import java.util.Map;
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2023-02-07T20:11:15.784+01:00[Europe/Paris]")
@Controller
public class ApiApiController implements ApiApi {

    private static final Logger log = LoggerFactory.getLogger(ApiApiController.class);

    private final ObjectMapper objectMapper;

    private final HttpServletRequest request;

    @org.springframework.beans.factory.annotation.Autowired
    public ApiApiController(ObjectMapper objectMapper, HttpServletRequest request) {
        this.objectMapper = objectMapper;
        this.request = request;
    }

    public ResponseEntity<Void> activateAccount(@NotNull @ApiParam(value = "", required = true) @Valid @RequestParam(value = "key", required = true) String key
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<JWTToken> authorize(@ApiParam(value = "" ,required=true )  @Valid @RequestBody LoginVM body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<JWTToken>(objectMapper.readValue("{\n  \"id_token\" : \"id_token\"\n}", JWTToken.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<JWTToken>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<JWTToken>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> changePassword(@ApiParam(value = "" ,required=true )  @Valid @RequestBody PasswordChangeDTO body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<CustomerDetailsDTO> createCustomerDetails(@ApiParam(value = "" ,required=true )  @Valid @RequestBody CustomerDetailsDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<CustomerDetailsDTO>(objectMapper.readValue("{\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n}", CustomerDetailsDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductDTO> createProduct(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductDTO>(objectMapper.readValue("{\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n}", ProductDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductCategoryDTO> createProductCategory(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductCategoryDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductCategoryDTO>(objectMapper.readValue("{\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n}", ProductCategoryDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductCategoryDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductCategoryDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductOrderDTO> createProductOrder(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductOrderDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductOrderDTO>(objectMapper.readValue("{\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n}", ProductOrderDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductOrderDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductOrderDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ShoppingCartDTO> createShoppingCart(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ShoppingCartDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ShoppingCartDTO>(objectMapper.readValue("{\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n}", ShoppingCartDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ShoppingCartDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ShoppingCartDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<User> createUser(@ApiParam(value = "" ,required=true )  @Valid @RequestBody AdminUserDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<User>(objectMapper.readValue("{\n  \"firstName\" : \"firstName\",\n  \"lastName\" : \"lastName\",\n  \"langKey\" : \"langKey\",\n  \"resetDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"login\" : \"login\",\n  \"email\" : \"email\",\n  \"activated\" : true\n}", User.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<User>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<User>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteCustomerDetails(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteProduct(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteProductCategory(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteProductOrder(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteShoppingCart(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> deleteUser(@Pattern(regexp="^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$") @ApiParam(value = "",required=true) @PathVariable("login") String login
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> finishPasswordReset(@ApiParam(value = "" ,required=true )  @Valid @RequestBody KeyAndPasswordVM body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<AdminUserDTO> getAccount() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<AdminUserDTO>(objectMapper.readValue("{\n  \"lastName\" : \"lastName\",\n  \"lastModifiedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"lastModifiedBy\" : \"lastModifiedBy\",\n  \"login\" : \"login\",\n  \"authorities\" : [ \"authorities\", \"authorities\" ],\n  \"firstName\" : \"firstName\",\n  \"createdDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"langKey\" : \"langKey\",\n  \"createdBy\" : \"createdBy\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"email\" : \"email\",\n  \"activated\" : true\n}", AdminUserDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<AdminUserDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<AdminUserDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<CustomerDetailsDTO>> getAllCustomerDetails(@Min(0)@ApiParam(value = "Zero-based page index (0..N)", allowableValues = "", defaultValue = "0") @Valid @RequestParam(value = "page", required = false, defaultValue="0") Integer page
,@Min(1)@ApiParam(value = "The size of the page to be returned", allowableValues = "", defaultValue = "20") @Valid @RequestParam(value = "size", required = false, defaultValue="20") Integer size
,@ApiParam(value = "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.") @Valid @RequestParam(value = "sort", required = false) List<String> sort
,@ApiParam(value = "", defaultValue = "false") @Valid @RequestParam(value = "eagerload", required = false, defaultValue="false") Boolean eagerload
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<CustomerDetailsDTO>>(objectMapper.readValue("[ {\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n}, {\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<CustomerDetailsDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<CustomerDetailsDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<ProductCategoryDTO>> getAllProductCategories(@Min(0)@ApiParam(value = "Zero-based page index (0..N)", allowableValues = "", defaultValue = "0") @Valid @RequestParam(value = "page", required = false, defaultValue="0") Integer page
,@Min(1)@ApiParam(value = "The size of the page to be returned", allowableValues = "", defaultValue = "20") @Valid @RequestParam(value = "size", required = false, defaultValue="20") Integer size
,@ApiParam(value = "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.") @Valid @RequestParam(value = "sort", required = false) List<String> sort
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<ProductCategoryDTO>>(objectMapper.readValue("[ {\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n}, {\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<ProductCategoryDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<ProductCategoryDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<ProductOrderDTO>> getAllProductOrders(@ApiParam(value = "", defaultValue = "false") @Valid @RequestParam(value = "eagerload", required = false, defaultValue="false") Boolean eagerload
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<ProductOrderDTO>>(objectMapper.readValue("[ {\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n}, {\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<ProductOrderDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<ProductOrderDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<ProductDTO>> getAllProducts(@Min(0)@ApiParam(value = "Zero-based page index (0..N)", allowableValues = "", defaultValue = "0") @Valid @RequestParam(value = "page", required = false, defaultValue="0") Integer page
,@Min(1)@ApiParam(value = "The size of the page to be returned", allowableValues = "", defaultValue = "20") @Valid @RequestParam(value = "size", required = false, defaultValue="20") Integer size
,@ApiParam(value = "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.") @Valid @RequestParam(value = "sort", required = false) List<String> sort
,@ApiParam(value = "", defaultValue = "false") @Valid @RequestParam(value = "eagerload", required = false, defaultValue="false") Boolean eagerload
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<ProductDTO>>(objectMapper.readValue("[ {\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n}, {\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<ProductDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<ProductDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<UserDTO>> getAllPublicUsers(@Min(0)@ApiParam(value = "Zero-based page index (0..N)", allowableValues = "", defaultValue = "0") @Valid @RequestParam(value = "page", required = false, defaultValue="0") Integer page
,@Min(1)@ApiParam(value = "The size of the page to be returned", allowableValues = "", defaultValue = "20") @Valid @RequestParam(value = "size", required = false, defaultValue="20") Integer size
,@ApiParam(value = "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.") @Valid @RequestParam(value = "sort", required = false) List<String> sort
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<UserDTO>>(objectMapper.readValue("[ {\n  \"id\" : 2,\n  \"login\" : \"login\"\n}, {\n  \"id\" : 2,\n  \"login\" : \"login\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<UserDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<UserDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<ShoppingCartDTO>> getAllShoppingCarts() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<ShoppingCartDTO>>(objectMapper.readValue("[ {\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n}, {\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<ShoppingCartDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<ShoppingCartDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<AdminUserDTO>> getAllUsers(@Min(0)@ApiParam(value = "Zero-based page index (0..N)", allowableValues = "", defaultValue = "0") @Valid @RequestParam(value = "page", required = false, defaultValue="0") Integer page
,@Min(1)@ApiParam(value = "The size of the page to be returned", allowableValues = "", defaultValue = "20") @Valid @RequestParam(value = "size", required = false, defaultValue="20") Integer size
,@ApiParam(value = "Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.") @Valid @RequestParam(value = "sort", required = false) List<String> sort
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<AdminUserDTO>>(objectMapper.readValue("[ {\n  \"lastName\" : \"lastName\",\n  \"lastModifiedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"lastModifiedBy\" : \"lastModifiedBy\",\n  \"login\" : \"login\",\n  \"authorities\" : [ \"authorities\", \"authorities\" ],\n  \"firstName\" : \"firstName\",\n  \"createdDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"langKey\" : \"langKey\",\n  \"createdBy\" : \"createdBy\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"email\" : \"email\",\n  \"activated\" : true\n}, {\n  \"lastName\" : \"lastName\",\n  \"lastModifiedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"lastModifiedBy\" : \"lastModifiedBy\",\n  \"login\" : \"login\",\n  \"authorities\" : [ \"authorities\", \"authorities\" ],\n  \"firstName\" : \"firstName\",\n  \"createdDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"langKey\" : \"langKey\",\n  \"createdBy\" : \"createdBy\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"email\" : \"email\",\n  \"activated\" : true\n} ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<AdminUserDTO>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<AdminUserDTO>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<List<String>> getAuthorities() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<List<String>>(objectMapper.readValue("[ \"\", \"\" ]", List.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<List<String>>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<List<String>>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<CustomerDetailsDTO> getCustomerDetails(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<CustomerDetailsDTO>(objectMapper.readValue("{\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n}", CustomerDetailsDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductDTO> getProduct(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductDTO>(objectMapper.readValue("{\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n}", ProductDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductCategoryDTO> getProductCategory(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductCategoryDTO>(objectMapper.readValue("{\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n}", ProductCategoryDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductCategoryDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductCategoryDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductOrderDTO> getProductOrder(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductOrderDTO>(objectMapper.readValue("{\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n}", ProductOrderDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductOrderDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductOrderDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ShoppingCartDTO> getShoppingCart(@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ShoppingCartDTO>(objectMapper.readValue("{\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n}", ShoppingCartDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ShoppingCartDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ShoppingCartDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<AdminUserDTO> getUser(@Pattern(regexp="^(?>[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)|(?>[_.@A-Za-z0-9-]+)$") @ApiParam(value = "",required=true) @PathVariable("login") String login
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<AdminUserDTO>(objectMapper.readValue("{\n  \"lastName\" : \"lastName\",\n  \"lastModifiedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"lastModifiedBy\" : \"lastModifiedBy\",\n  \"login\" : \"login\",\n  \"authorities\" : [ \"authorities\", \"authorities\" ],\n  \"firstName\" : \"firstName\",\n  \"createdDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"langKey\" : \"langKey\",\n  \"createdBy\" : \"createdBy\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"email\" : \"email\",\n  \"activated\" : true\n}", AdminUserDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<AdminUserDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<AdminUserDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<String> isAuthenticated() {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<String>(objectMapper.readValue("\"\"", String.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<String>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<String>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<CustomerDetailsDTO> partialUpdateCustomerDetails(@ApiParam(value = "" ,required=true )  @Valid @RequestBody CustomerDetailsDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<CustomerDetailsDTO>(objectMapper.readValue("{\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n}", CustomerDetailsDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductDTO> partialUpdateProduct(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductDTO>(objectMapper.readValue("{\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n}", ProductDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductCategoryDTO> partialUpdateProductCategory(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductCategoryDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductCategoryDTO>(objectMapper.readValue("{\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n}", ProductCategoryDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductCategoryDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductCategoryDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductOrderDTO> partialUpdateProductOrder(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductOrderDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductOrderDTO>(objectMapper.readValue("{\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n}", ProductOrderDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductOrderDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductOrderDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ShoppingCartDTO> partialUpdateShoppingCart(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ShoppingCartDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ShoppingCartDTO>(objectMapper.readValue("{\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n}", ShoppingCartDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ShoppingCartDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ShoppingCartDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> registerAccount(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ManagedUserVM body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> requestPasswordReset(@ApiParam(value = "" ,required=true )  @Valid @RequestBody String body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<Void> saveAccount(@ApiParam(value = "" ,required=true )  @Valid @RequestBody AdminUserDTO body
) {
        String accept = request.getHeader("Accept");
        return new ResponseEntity<Void>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<CustomerDetailsDTO> updateCustomerDetails(@ApiParam(value = "" ,required=true )  @Valid @RequestBody CustomerDetailsDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<CustomerDetailsDTO>(objectMapper.readValue("{\n  \"country\" : \"country\",\n  \"gender\" : \"MALE\",\n  \"phone\" : \"phone\",\n  \"city\" : \"city\",\n  \"latitude\" : 5.962134,\n  \"geohash\" : \"geohash\",\n  \"olc\" : \"olc\",\n  \"addressLine1\" : \"addressLine1\",\n  \"addressLine2\" : \"addressLine2\",\n  \"id\" : 1,\n  \"user\" : {\n    \"id\" : 2,\n    \"login\" : \"login\"\n  },\n  \"longitude\" : 5.637377\n}", CustomerDetailsDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<CustomerDetailsDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductDTO> updateProduct(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductDTO>(objectMapper.readValue("{\n  \"image\" : [ \"\", \"\" ],\n  \"imageCdnUrl\" : \"imageCdnUrl\",\n  \"productSize\" : \"S\",\n  \"imageSha1\" : \"imageSha1\",\n  \"upc\" : \"upc\",\n  \"description\" : \"description\",\n  \"colors\" : \"colors\",\n  \"productCategory\" : {\n    \"name\" : \"name\",\n    \"description\" : \"description\",\n    \"id\" : 1\n  },\n  \"ean\" : \"ean\",\n  \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n  \"price\" : 0.6027456183070403,\n  \"imageContentType\" : \"imageContentType\",\n  \"name\" : \"name\",\n  \"thumbnailSha1\" : \"thumbnailSha1\",\n  \"id\" : 0,\n  \"sku\" : \"sku\"\n}", ProductDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductCategoryDTO> updateProductCategory(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductCategoryDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductCategoryDTO>(objectMapper.readValue("{\n  \"name\" : \"name\",\n  \"description\" : \"description\",\n  \"id\" : 1\n}", ProductCategoryDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductCategoryDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductCategoryDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ProductOrderDTO> updateProductOrder(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ProductOrderDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ProductOrderDTO>(objectMapper.readValue("{\n  \"product\" : {\n    \"image\" : [ \"\", \"\" ],\n    \"imageCdnUrl\" : \"imageCdnUrl\",\n    \"productSize\" : \"S\",\n    \"imageSha1\" : \"imageSha1\",\n    \"upc\" : \"upc\",\n    \"description\" : \"description\",\n    \"colors\" : \"colors\",\n    \"productCategory\" : {\n      \"name\" : \"name\",\n      \"description\" : \"description\",\n      \"id\" : 1\n    },\n    \"ean\" : \"ean\",\n    \"thumbnailCdnUrl\" : \"thumbnailCdnUrl\",\n    \"price\" : 0.6027456183070403,\n    \"imageContentType\" : \"imageContentType\",\n    \"name\" : \"name\",\n    \"thumbnailSha1\" : \"thumbnailSha1\",\n    \"id\" : 0,\n    \"sku\" : \"sku\"\n  },\n  \"quantity\" : 0,\n  \"totalPrice\" : 0.14658129805029452,\n  \"id\" : 0,\n  \"cart\" : {\n    \"totalPrice\" : 0.6027456183070403,\n    \"paymentReference\" : \"paymentReference\",\n    \"paymentMethod\" : \"CREDIT_CARD\",\n    \"id\" : 0,\n    \"customerDetails\" : {\n      \"country\" : \"country\",\n      \"gender\" : \"MALE\",\n      \"phone\" : \"phone\",\n      \"city\" : \"city\",\n      \"latitude\" : 5.962134,\n      \"geohash\" : \"geohash\",\n      \"olc\" : \"olc\",\n      \"addressLine1\" : \"addressLine1\",\n      \"addressLine2\" : \"addressLine2\",\n      \"id\" : 1,\n      \"user\" : {\n        \"id\" : 2,\n        \"login\" : \"login\"\n      },\n      \"longitude\" : 5.637377\n    },\n    \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n    \"status\" : \"COMPLETED\"\n  }\n}", ProductOrderDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ProductOrderDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ProductOrderDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<ShoppingCartDTO> updateShoppingCart(@ApiParam(value = "" ,required=true )  @Valid @RequestBody ShoppingCartDTO body
,@ApiParam(value = "",required=true) @PathVariable("id") Long id
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<ShoppingCartDTO>(objectMapper.readValue("{\n  \"totalPrice\" : 0.6027456183070403,\n  \"paymentReference\" : \"paymentReference\",\n  \"paymentMethod\" : \"CREDIT_CARD\",\n  \"id\" : 0,\n  \"customerDetails\" : {\n    \"country\" : \"country\",\n    \"gender\" : \"MALE\",\n    \"phone\" : \"phone\",\n    \"city\" : \"city\",\n    \"latitude\" : 5.962134,\n    \"geohash\" : \"geohash\",\n    \"olc\" : \"olc\",\n    \"addressLine1\" : \"addressLine1\",\n    \"addressLine2\" : \"addressLine2\",\n    \"id\" : 1,\n    \"user\" : {\n      \"id\" : 2,\n      \"login\" : \"login\"\n    },\n    \"longitude\" : 5.637377\n  },\n  \"placedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"status\" : \"COMPLETED\"\n}", ShoppingCartDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<ShoppingCartDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<ShoppingCartDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

    public ResponseEntity<AdminUserDTO> updateUser(@ApiParam(value = "" ,required=true )  @Valid @RequestBody AdminUserDTO body
) {
        String accept = request.getHeader("Accept");
        if (accept != null && accept.contains("application/json")) {
            try {
                return new ResponseEntity<AdminUserDTO>(objectMapper.readValue("{\n  \"lastName\" : \"lastName\",\n  \"lastModifiedDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"lastModifiedBy\" : \"lastModifiedBy\",\n  \"login\" : \"login\",\n  \"authorities\" : [ \"authorities\", \"authorities\" ],\n  \"firstName\" : \"firstName\",\n  \"createdDate\" : \"2000-01-23T04:56:07.000+00:00\",\n  \"langKey\" : \"langKey\",\n  \"createdBy\" : \"createdBy\",\n  \"imageUrl\" : \"imageUrl\",\n  \"id\" : 0,\n  \"email\" : \"email\",\n  \"activated\" : true\n}", AdminUserDTO.class), HttpStatus.NOT_IMPLEMENTED);
            } catch (IOException e) {
                log.error("Couldn't serialize response for content type application/json", e);
                return new ResponseEntity<AdminUserDTO>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        return new ResponseEntity<AdminUserDTO>(HttpStatus.NOT_IMPLEMENTED);
    }

}
