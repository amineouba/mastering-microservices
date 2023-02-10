package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.ProductDTO;
import io.swagger.model.ShoppingCartDTO;
import java.math.BigDecimal;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * ProductOrderDTO
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2023-02-07T20:11:15.784+01:00[Europe/Paris]")
public class ProductOrderDTO   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("quantity")
  private Integer quantity = null;

  @JsonProperty("totalPrice")
  private BigDecimal totalPrice = null;

  @JsonProperty("product")
  private ProductDTO product = null;

  @JsonProperty("cart")
  private ShoppingCartDTO cart = null;

  public ProductOrderDTO id(Long id) {
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

  public ProductOrderDTO quantity(Integer quantity) {
    this.quantity = quantity;
    return this;
  }

  /**
   * Get quantity
   * minimum: 0
   * @return quantity
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

  @Min(0)  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public ProductOrderDTO totalPrice(BigDecimal totalPrice) {
    this.totalPrice = totalPrice;
    return this;
  }

  /**
   * Get totalPrice
   * minimum: 0
   * @return totalPrice
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    @Valid
  @DecimalMin("0")  public BigDecimal getTotalPrice() {
    return totalPrice;
  }

  public void setTotalPrice(BigDecimal totalPrice) {
    this.totalPrice = totalPrice;
  }

  public ProductOrderDTO product(ProductDTO product) {
    this.product = product;
    return this;
  }

  /**
   * Get product
   * @return product
  **/
  @ApiModelProperty(value = "")
  
    @Valid
    public ProductDTO getProduct() {
    return product;
  }

  public void setProduct(ProductDTO product) {
    this.product = product;
  }

  public ProductOrderDTO cart(ShoppingCartDTO cart) {
    this.cart = cart;
    return this;
  }

  /**
   * Get cart
   * @return cart
  **/
  @ApiModelProperty(value = "")
  
    @Valid
    public ShoppingCartDTO getCart() {
    return cart;
  }

  public void setCart(ShoppingCartDTO cart) {
    this.cart = cart;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductOrderDTO productOrderDTO = (ProductOrderDTO) o;
    return Objects.equals(this.id, productOrderDTO.id) &&
        Objects.equals(this.quantity, productOrderDTO.quantity) &&
        Objects.equals(this.totalPrice, productOrderDTO.totalPrice) &&
        Objects.equals(this.product, productOrderDTO.product) &&
        Objects.equals(this.cart, productOrderDTO.cart);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, quantity, totalPrice, product, cart);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductOrderDTO {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    totalPrice: ").append(toIndentedString(totalPrice)).append("\n");
    sb.append("    product: ").append(toIndentedString(product)).append("\n");
    sb.append("    cart: ").append(toIndentedString(cart)).append("\n");
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
