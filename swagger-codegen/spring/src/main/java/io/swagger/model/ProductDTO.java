package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.ProductCategoryDTO;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * Product sold by the Online store
 */
@ApiModel(description = "Product sold by the Online store")
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2023-02-07T20:11:15.784+01:00[Europe/Paris]")
public class ProductDTO   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("sku")
  private String sku = null;

  @JsonProperty("upc")
  private String upc = null;

  @JsonProperty("ean")
  private String ean = null;

  @JsonProperty("name")
  private String name = null;

  @JsonProperty("description")
  private String description = null;

  @JsonProperty("price")
  private BigDecimal price = null;

  /**
   * Gets or Sets productSize
   */
  public enum ProductSizeEnum {
    S("S"),
    
    M("M"),
    
    L("L"),
    
    XL("XL"),
    
    XXL("XXL");

    private String value;

    ProductSizeEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static ProductSizeEnum fromValue(String text) {
      for (ProductSizeEnum b : ProductSizeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }
  @JsonProperty("productSize")
  private ProductSizeEnum productSize = null;

  @JsonProperty("colors")
  private String colors = null;

  @JsonProperty("image")
  @Valid
  private List<byte[]> image = null;

  @JsonProperty("imageContentType")
  private String imageContentType = null;

  @JsonProperty("imageSha1")
  private String imageSha1 = null;

  @JsonProperty("imageCdnUrl")
  private String imageCdnUrl = null;

  @JsonProperty("thumbnailSha1")
  private String thumbnailSha1 = null;

  @JsonProperty("thumbnailCdnUrl")
  private String thumbnailCdnUrl = null;

  @JsonProperty("productCategory")
  private ProductCategoryDTO productCategory = null;

  public ProductDTO id(Long id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  
    public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public ProductDTO sku(String sku) {
    this.sku = sku;
    return this;
  }

  /**
   * Get sku
   * @return sku
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public String getSku() {
    return sku;
  }

  public void setSku(String sku) {
    this.sku = sku;
  }

  public ProductDTO upc(String upc) {
    this.upc = upc;
    return this;
  }

  /**
   * Get upc
   * @return upc
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public String getUpc() {
    return upc;
  }

  public void setUpc(String upc) {
    this.upc = upc;
  }

  public ProductDTO ean(String ean) {
    this.ean = ean;
    return this;
  }

  /**
   * Get ean
   * @return ean
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public String getEan() {
    return ean;
  }

  public void setEan(String ean) {
    this.ean = ean;
  }

  public ProductDTO name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public ProductDTO description(String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
  **/
  @ApiModelProperty(value = "")
  
    public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public ProductDTO price(BigDecimal price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * minimum: 0
   * @return price
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    @Valid
  @DecimalMin("0")  public BigDecimal getPrice() {
    return price;
  }

  public void setPrice(BigDecimal price) {
    this.price = price;
  }

  public ProductDTO productSize(ProductSizeEnum productSize) {
    this.productSize = productSize;
    return this;
  }

  /**
   * Get productSize
   * @return productSize
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public ProductSizeEnum getProductSize() {
    return productSize;
  }

  public void setProductSize(ProductSizeEnum productSize) {
    this.productSize = productSize;
  }

  public ProductDTO colors(String colors) {
    this.colors = colors;
    return this;
  }

  /**
   * Get colors
   * @return colors
  **/
  @ApiModelProperty(value = "")
  
  @Pattern(regexp="^([a-z]+,)*[a-z]+$")   public String getColors() {
    return colors;
  }

  public void setColors(String colors) {
    this.colors = colors;
  }

  public ProductDTO image(List<byte[]> image) {
    this.image = image;
    return this;
  }

  public ProductDTO addImageItem(byte[] imageItem) {
    if (this.image == null) {
      this.image = new ArrayList<byte[]>();
    }
    this.image.add(imageItem);
    return this;
  }

  /**
   * Get image
   * @return image
  **/
  @ApiModelProperty(value = "")
  
    public List<byte[]> getImage() {
    return image;
  }

  public void setImage(List<byte[]> image) {
    this.image = image;
  }

  public ProductDTO imageContentType(String imageContentType) {
    this.imageContentType = imageContentType;
    return this;
  }

  /**
   * Get imageContentType
   * @return imageContentType
  **/
  @ApiModelProperty(value = "")
  
    public String getImageContentType() {
    return imageContentType;
  }

  public void setImageContentType(String imageContentType) {
    this.imageContentType = imageContentType;
  }

  public ProductDTO imageSha1(String imageSha1) {
    this.imageSha1 = imageSha1;
    return this;
  }

  /**
   * Get imageSha1
   * @return imageSha1
  **/
  @ApiModelProperty(value = "")
  
  @Pattern(regexp="[a-f0-9]{40}") @Size(min=40,max=40)   public String getImageSha1() {
    return imageSha1;
  }

  public void setImageSha1(String imageSha1) {
    this.imageSha1 = imageSha1;
  }

  public ProductDTO imageCdnUrl(String imageCdnUrl) {
    this.imageCdnUrl = imageCdnUrl;
    return this;
  }

  /**
   * Get imageCdnUrl
   * @return imageCdnUrl
  **/
  @ApiModelProperty(value = "")
  
    public String getImageCdnUrl() {
    return imageCdnUrl;
  }

  public void setImageCdnUrl(String imageCdnUrl) {
    this.imageCdnUrl = imageCdnUrl;
  }

  public ProductDTO thumbnailSha1(String thumbnailSha1) {
    this.thumbnailSha1 = thumbnailSha1;
    return this;
  }

  /**
   * Get thumbnailSha1
   * @return thumbnailSha1
  **/
  @ApiModelProperty(value = "")
  
  @Pattern(regexp="[a-f0-9]{40}") @Size(min=40,max=40)   public String getThumbnailSha1() {
    return thumbnailSha1;
  }

  public void setThumbnailSha1(String thumbnailSha1) {
    this.thumbnailSha1 = thumbnailSha1;
  }

  public ProductDTO thumbnailCdnUrl(String thumbnailCdnUrl) {
    this.thumbnailCdnUrl = thumbnailCdnUrl;
    return this;
  }

  /**
   * Get thumbnailCdnUrl
   * @return thumbnailCdnUrl
  **/
  @ApiModelProperty(value = "")
  
    public String getThumbnailCdnUrl() {
    return thumbnailCdnUrl;
  }

  public void setThumbnailCdnUrl(String thumbnailCdnUrl) {
    this.thumbnailCdnUrl = thumbnailCdnUrl;
  }

  public ProductDTO productCategory(ProductCategoryDTO productCategory) {
    this.productCategory = productCategory;
    return this;
  }

  /**
   * Get productCategory
   * @return productCategory
  **/
  @ApiModelProperty(value = "")
  
    @Valid
    public ProductCategoryDTO getProductCategory() {
    return productCategory;
  }

  public void setProductCategory(ProductCategoryDTO productCategory) {
    this.productCategory = productCategory;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductDTO productDTO = (ProductDTO) o;
    return Objects.equals(this.id, productDTO.id) &&
        Objects.equals(this.sku, productDTO.sku) &&
        Objects.equals(this.upc, productDTO.upc) &&
        Objects.equals(this.ean, productDTO.ean) &&
        Objects.equals(this.name, productDTO.name) &&
        Objects.equals(this.description, productDTO.description) &&
        Objects.equals(this.price, productDTO.price) &&
        Objects.equals(this.productSize, productDTO.productSize) &&
        Objects.equals(this.colors, productDTO.colors) &&
        Objects.equals(this.image, productDTO.image) &&
        Objects.equals(this.imageContentType, productDTO.imageContentType) &&
        Objects.equals(this.imageSha1, productDTO.imageSha1) &&
        Objects.equals(this.imageCdnUrl, productDTO.imageCdnUrl) &&
        Objects.equals(this.thumbnailSha1, productDTO.thumbnailSha1) &&
        Objects.equals(this.thumbnailCdnUrl, productDTO.thumbnailCdnUrl) &&
        Objects.equals(this.productCategory, productDTO.productCategory);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, sku, upc, ean, name, description, price, productSize, colors, image, imageContentType, imageSha1, imageCdnUrl, thumbnailSha1, thumbnailCdnUrl, productCategory);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductDTO {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    sku: ").append(toIndentedString(sku)).append("\n");
    sb.append("    upc: ").append(toIndentedString(upc)).append("\n");
    sb.append("    ean: ").append(toIndentedString(ean)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    productSize: ").append(toIndentedString(productSize)).append("\n");
    sb.append("    colors: ").append(toIndentedString(colors)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    imageContentType: ").append(toIndentedString(imageContentType)).append("\n");
    sb.append("    imageSha1: ").append(toIndentedString(imageSha1)).append("\n");
    sb.append("    imageCdnUrl: ").append(toIndentedString(imageCdnUrl)).append("\n");
    sb.append("    thumbnailSha1: ").append(toIndentedString(thumbnailSha1)).append("\n");
    sb.append("    thumbnailCdnUrl: ").append(toIndentedString(thumbnailCdnUrl)).append("\n");
    sb.append("    productCategory: ").append(toIndentedString(productCategory)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}
