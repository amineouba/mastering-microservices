<?php
/**
 * ProductDTO
 *
 * PHP version 5
 *
 * @category Class
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * Store API
 *
 * Store API documentation
 *
 * OpenAPI spec version: 0.0.1
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 3.0.20
 */
/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace Swagger\Client\Model;

use \ArrayAccess;
use \Swagger\Client\ObjectSerializer;

/**
 * ProductDTO Class Doc Comment
 *
 * @category Class
 * @description Product sold by the Online store
 * @package  Swagger\Client
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class ProductDTO implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'ProductDTO';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'id' => 'int',
'sku' => 'string',
'upc' => 'string',
'ean' => 'string',
'name' => 'string',
'description' => 'string',
'price' => 'float',
'product_size' => 'string',
'colors' => 'string',
'image' => 'string[]',
'image_content_type' => 'string',
'image_sha1' => 'string',
'image_cdn_url' => 'string',
'thumbnail_sha1' => 'string',
'thumbnail_cdn_url' => 'string',
'product_category' => '\Swagger\Client\Model\ProductCategoryDTO'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'id' => 'int64',
'sku' => null,
'upc' => null,
'ean' => null,
'name' => null,
'description' => null,
'price' => null,
'product_size' => null,
'colors' => null,
'image' => 'byte',
'image_content_type' => null,
'image_sha1' => null,
'image_cdn_url' => null,
'thumbnail_sha1' => null,
'thumbnail_cdn_url' => null,
'product_category' => null    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'id' => 'id',
'sku' => 'sku',
'upc' => 'upc',
'ean' => 'ean',
'name' => 'name',
'description' => 'description',
'price' => 'price',
'product_size' => 'productSize',
'colors' => 'colors',
'image' => 'image',
'image_content_type' => 'imageContentType',
'image_sha1' => 'imageSha1',
'image_cdn_url' => 'imageCdnUrl',
'thumbnail_sha1' => 'thumbnailSha1',
'thumbnail_cdn_url' => 'thumbnailCdnUrl',
'product_category' => 'productCategory'    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'id' => 'setId',
'sku' => 'setSku',
'upc' => 'setUpc',
'ean' => 'setEan',
'name' => 'setName',
'description' => 'setDescription',
'price' => 'setPrice',
'product_size' => 'setProductSize',
'colors' => 'setColors',
'image' => 'setImage',
'image_content_type' => 'setImageContentType',
'image_sha1' => 'setImageSha1',
'image_cdn_url' => 'setImageCdnUrl',
'thumbnail_sha1' => 'setThumbnailSha1',
'thumbnail_cdn_url' => 'setThumbnailCdnUrl',
'product_category' => 'setProductCategory'    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'id' => 'getId',
'sku' => 'getSku',
'upc' => 'getUpc',
'ean' => 'getEan',
'name' => 'getName',
'description' => 'getDescription',
'price' => 'getPrice',
'product_size' => 'getProductSize',
'colors' => 'getColors',
'image' => 'getImage',
'image_content_type' => 'getImageContentType',
'image_sha1' => 'getImageSha1',
'image_cdn_url' => 'getImageCdnUrl',
'thumbnail_sha1' => 'getThumbnailSha1',
'thumbnail_cdn_url' => 'getThumbnailCdnUrl',
'product_category' => 'getProductCategory'    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    const PRODUCT_SIZE_S = 'S';
const PRODUCT_SIZE_M = 'M';
const PRODUCT_SIZE_L = 'L';
const PRODUCT_SIZE_XL = 'XL';
const PRODUCT_SIZE_XXL = 'XXL';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getProductSizeAllowableValues()
    {
        return [
            self::PRODUCT_SIZE_S,
self::PRODUCT_SIZE_M,
self::PRODUCT_SIZE_L,
self::PRODUCT_SIZE_XL,
self::PRODUCT_SIZE_XXL,        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['id'] = isset($data['id']) ? $data['id'] : null;
        $this->container['sku'] = isset($data['sku']) ? $data['sku'] : null;
        $this->container['upc'] = isset($data['upc']) ? $data['upc'] : null;
        $this->container['ean'] = isset($data['ean']) ? $data['ean'] : null;
        $this->container['name'] = isset($data['name']) ? $data['name'] : null;
        $this->container['description'] = isset($data['description']) ? $data['description'] : null;
        $this->container['price'] = isset($data['price']) ? $data['price'] : null;
        $this->container['product_size'] = isset($data['product_size']) ? $data['product_size'] : null;
        $this->container['colors'] = isset($data['colors']) ? $data['colors'] : null;
        $this->container['image'] = isset($data['image']) ? $data['image'] : null;
        $this->container['image_content_type'] = isset($data['image_content_type']) ? $data['image_content_type'] : null;
        $this->container['image_sha1'] = isset($data['image_sha1']) ? $data['image_sha1'] : null;
        $this->container['image_cdn_url'] = isset($data['image_cdn_url']) ? $data['image_cdn_url'] : null;
        $this->container['thumbnail_sha1'] = isset($data['thumbnail_sha1']) ? $data['thumbnail_sha1'] : null;
        $this->container['thumbnail_cdn_url'] = isset($data['thumbnail_cdn_url']) ? $data['thumbnail_cdn_url'] : null;
        $this->container['product_category'] = isset($data['product_category']) ? $data['product_category'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['sku'] === null) {
            $invalidProperties[] = "'sku' can't be null";
        }
        if ($this->container['upc'] === null) {
            $invalidProperties[] = "'upc' can't be null";
        }
        if ($this->container['ean'] === null) {
            $invalidProperties[] = "'ean' can't be null";
        }
        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ($this->container['price'] === null) {
            $invalidProperties[] = "'price' can't be null";
        }
        if ($this->container['product_size'] === null) {
            $invalidProperties[] = "'product_size' can't be null";
        }
        $allowedValues = $this->getProductSizeAllowableValues();
        if (!is_null($this->container['product_size']) && !in_array($this->container['product_size'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value for 'product_size', must be one of '%s'",
                implode("', '", $allowedValues)
            );
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets id
     *
     * @return int
     */
    public function getId()
    {
        return $this->container['id'];
    }

    /**
     * Sets id
     *
     * @param int $id id
     *
     * @return $this
     */
    public function setId($id)
    {
        $this->container['id'] = $id;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string
     */
    public function getSku()
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string $sku sku
     *
     * @return $this
     */
    public function setSku($sku)
    {
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets upc
     *
     * @return string
     */
    public function getUpc()
    {
        return $this->container['upc'];
    }

    /**
     * Sets upc
     *
     * @param string $upc upc
     *
     * @return $this
     */
    public function setUpc($upc)
    {
        $this->container['upc'] = $upc;

        return $this;
    }

    /**
     * Gets ean
     *
     * @return string
     */
    public function getEan()
    {
        return $this->container['ean'];
    }

    /**
     * Sets ean
     *
     * @param string $ean ean
     *
     * @return $this
     */
    public function setEan($ean)
    {
        $this->container['ean'] = $ean;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string
     */
    public function getName()
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name name
     *
     * @return $this
     */
    public function setName($name)
    {
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->container['description'];
    }

    /**
     * Sets description
     *
     * @param string $description description
     *
     * @return $this
     */
    public function setDescription($description)
    {
        $this->container['description'] = $description;

        return $this;
    }

    /**
     * Gets price
     *
     * @return float
     */
    public function getPrice()
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param float $price price
     *
     * @return $this
     */
    public function setPrice($price)
    {
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets product_size
     *
     * @return string
     */
    public function getProductSize()
    {
        return $this->container['product_size'];
    }

    /**
     * Sets product_size
     *
     * @param string $product_size product_size
     *
     * @return $this
     */
    public function setProductSize($product_size)
    {
        $allowedValues = $this->getProductSizeAllowableValues();
        if (!in_array($product_size, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'product_size', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['product_size'] = $product_size;

        return $this;
    }

    /**
     * Gets colors
     *
     * @return string
     */
    public function getColors()
    {
        return $this->container['colors'];
    }

    /**
     * Sets colors
     *
     * @param string $colors colors
     *
     * @return $this
     */
    public function setColors($colors)
    {
        $this->container['colors'] = $colors;

        return $this;
    }

    /**
     * Gets image
     *
     * @return string[]
     */
    public function getImage()
    {
        return $this->container['image'];
    }

    /**
     * Sets image
     *
     * @param string[] $image image
     *
     * @return $this
     */
    public function setImage($image)
    {
        $this->container['image'] = $image;

        return $this;
    }

    /**
     * Gets image_content_type
     *
     * @return string
     */
    public function getImageContentType()
    {
        return $this->container['image_content_type'];
    }

    /**
     * Sets image_content_type
     *
     * @param string $image_content_type image_content_type
     *
     * @return $this
     */
    public function setImageContentType($image_content_type)
    {
        $this->container['image_content_type'] = $image_content_type;

        return $this;
    }

    /**
     * Gets image_sha1
     *
     * @return string
     */
    public function getImageSha1()
    {
        return $this->container['image_sha1'];
    }

    /**
     * Sets image_sha1
     *
     * @param string $image_sha1 image_sha1
     *
     * @return $this
     */
    public function setImageSha1($image_sha1)
    {
        $this->container['image_sha1'] = $image_sha1;

        return $this;
    }

    /**
     * Gets image_cdn_url
     *
     * @return string
     */
    public function getImageCdnUrl()
    {
        return $this->container['image_cdn_url'];
    }

    /**
     * Sets image_cdn_url
     *
     * @param string $image_cdn_url image_cdn_url
     *
     * @return $this
     */
    public function setImageCdnUrl($image_cdn_url)
    {
        $this->container['image_cdn_url'] = $image_cdn_url;

        return $this;
    }

    /**
     * Gets thumbnail_sha1
     *
     * @return string
     */
    public function getThumbnailSha1()
    {
        return $this->container['thumbnail_sha1'];
    }

    /**
     * Sets thumbnail_sha1
     *
     * @param string $thumbnail_sha1 thumbnail_sha1
     *
     * @return $this
     */
    public function setThumbnailSha1($thumbnail_sha1)
    {
        $this->container['thumbnail_sha1'] = $thumbnail_sha1;

        return $this;
    }

    /**
     * Gets thumbnail_cdn_url
     *
     * @return string
     */
    public function getThumbnailCdnUrl()
    {
        return $this->container['thumbnail_cdn_url'];
    }

    /**
     * Sets thumbnail_cdn_url
     *
     * @param string $thumbnail_cdn_url thumbnail_cdn_url
     *
     * @return $this
     */
    public function setThumbnailCdnUrl($thumbnail_cdn_url)
    {
        $this->container['thumbnail_cdn_url'] = $thumbnail_cdn_url;

        return $this;
    }

    /**
     * Gets product_category
     *
     * @return \Swagger\Client\Model\ProductCategoryDTO
     */
    public function getProductCategory()
    {
        return $this->container['product_category'];
    }

    /**
     * Sets product_category
     *
     * @param \Swagger\Client\Model\ProductCategoryDTO $product_category product_category
     *
     * @return $this
     */
    public function setProductCategory($product_category)
    {
        $this->container['product_category'] = $product_category;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}
