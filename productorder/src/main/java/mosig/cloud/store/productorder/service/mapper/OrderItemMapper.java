package mosig.cloud.store.productorder.service.mapper;

import mosig.cloud.store.productorder.domain.OrderItem;
import mosig.cloud.store.productorder.domain.Product;
import mosig.cloud.store.productorder.domain.ProductOrder;
import mosig.cloud.store.productorder.service.dto.OrderItemDTO;
import mosig.cloud.store.productorder.service.dto.ProductDTO;
import mosig.cloud.store.productorder.service.dto.ProductOrderDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link OrderItem} and its DTO {@link OrderItemDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderItemMapper extends EntityMapper<OrderItemDTO, OrderItem> {
    @Mapping(target = "product", source = "product", qualifiedByName = "productId")
    @Mapping(target = "order", source = "order", qualifiedByName = "productOrderId")
    OrderItemDTO toDto(OrderItem s);

    @Named("productId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ProductDTO toDtoProductId(Product product);

    @Named("productOrderId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ProductOrderDTO toDtoProductOrderId(ProductOrder productOrder);
}
