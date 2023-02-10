package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.CustomerDetailsDTO;
import java.math.BigDecimal;
import org.threeten.bp.OffsetDateTime;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * ShoppingCartDTO
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.v3.generators.java.SpringCodegen", date = "2023-02-07T20:11:15.784+01:00[Europe/Paris]")
public class ShoppingCartDTO   {
  @JsonProperty("id")
  private Long id = null;

  @JsonProperty("placedDate")
  private OffsetDateTime placedDate = null;

  /**
   * Gets or Sets status
   */
  public enum StatusEnum {
    COMPLETED("COMPLETED"),
    
    PAID("PAID"),
    
    PENDING("PENDING"),
    
    CANCELLED("CANCELLED"),
    
    REFUNDED("REFUNDED");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static StatusEnum fromValue(String text) {
      for (StatusEnum b : StatusEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }
  @JsonProperty("status")
  private StatusEnum status = null;

  @JsonProperty("totalPrice")
  private BigDecimal totalPrice = null;

  /**
   * Gets or Sets paymentMethod
   */
  public enum PaymentMethodEnum {
    CREDIT_CARD("CREDIT_CARD"),
    
    IDEAL("IDEAL");

    private String value;

    PaymentMethodEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static PaymentMethodEnum fromValue(String text) {
      for (PaymentMethodEnum b : PaymentMethodEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }
  }
  @JsonProperty("paymentMethod")
  private PaymentMethodEnum paymentMethod = null;

  @JsonProperty("paymentReference")
  private String paymentReference = null;

  @JsonProperty("customerDetails")
  private CustomerDetailsDTO customerDetails = null;

  public ShoppingCartDTO id(Long id) {
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

  public ShoppingCartDTO placedDate(OffsetDateTime placedDate) {
    this.placedDate = placedDate;
    return this;
  }

  /**
   * Get placedDate
   * @return placedDate
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    @Valid
    public OffsetDateTime getPlacedDate() {
    return placedDate;
  }

  public void setPlacedDate(OffsetDateTime placedDate) {
    this.placedDate = placedDate;
  }

  public ShoppingCartDTO status(StatusEnum status) {
    this.status = status;
    return this;
  }

  /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public StatusEnum getStatus() {
    return status;
  }

  public void setStatus(StatusEnum status) {
    this.status = status;
  }

  public ShoppingCartDTO totalPrice(BigDecimal totalPrice) {
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

  public ShoppingCartDTO paymentMethod(PaymentMethodEnum paymentMethod) {
    this.paymentMethod = paymentMethod;
    return this;
  }

  /**
   * Get paymentMethod
   * @return paymentMethod
  **/
  @ApiModelProperty(required = true, value = "")
      @NotNull

    public PaymentMethodEnum getPaymentMethod() {
    return paymentMethod;
  }

  public void setPaymentMethod(PaymentMethodEnum paymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  public ShoppingCartDTO paymentReference(String paymentReference) {
    this.paymentReference = paymentReference;
    return this;
  }

  /**
   * Get paymentReference
   * @return paymentReference
  **/
  @ApiModelProperty(value = "")
  
    public String getPaymentReference() {
    return paymentReference;
  }

  public void setPaymentReference(String paymentReference) {
    this.paymentReference = paymentReference;
  }

  public ShoppingCartDTO customerDetails(CustomerDetailsDTO customerDetails) {
    this.customerDetails = customerDetails;
    return this;
  }

  /**
   * Get customerDetails
   * @return customerDetails
  **/
  @ApiModelProperty(value = "")
  
    @Valid
    public CustomerDetailsDTO getCustomerDetails() {
    return customerDetails;
  }

  public void setCustomerDetails(CustomerDetailsDTO customerDetails) {
    this.customerDetails = customerDetails;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ShoppingCartDTO shoppingCartDTO = (ShoppingCartDTO) o;
    return Objects.equals(this.id, shoppingCartDTO.id) &&
        Objects.equals(this.placedDate, shoppingCartDTO.placedDate) &&
        Objects.equals(this.status, shoppingCartDTO.status) &&
        Objects.equals(this.totalPrice, shoppingCartDTO.totalPrice) &&
        Objects.equals(this.paymentMethod, shoppingCartDTO.paymentMethod) &&
        Objects.equals(this.paymentReference, shoppingCartDTO.paymentReference) &&
        Objects.equals(this.customerDetails, shoppingCartDTO.customerDetails);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, placedDate, status, totalPrice, paymentMethod, paymentReference, customerDetails);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ShoppingCartDTO {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    placedDate: ").append(toIndentedString(placedDate)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    totalPrice: ").append(toIndentedString(totalPrice)).append("\n");
    sb.append("    paymentMethod: ").append(toIndentedString(paymentMethod)).append("\n");
    sb.append("    paymentReference: ").append(toIndentedString(paymentReference)).append("\n");
    sb.append("    customerDetails: ").append(toIndentedString(customerDetails)).append("\n");
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
