package mosig.cloud.store.service.mapper;

import mosig.cloud.store.domain.Product;
import mosig.cloud.store.domain.ProductOrder;
import mosig.cloud.store.domain.ShoppingCart;
import mosig.cloud.store.service.dto.ProductDTO;
import mosig.cloud.store.service.dto.ProductOrderDTO;
import mosig.cloud.store.service.dto.ShoppingCartDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ProductOrder} and its DTO {@link ProductOrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductOrderMapper extends EntityMapper<ProductOrderDTO, ProductOrder> {
    @Mapping(target = "product", source = "product", qualifiedByName = "productName")
    @Mapping(target = "cart", source = "cart", qualifiedByName = "shoppingCartId")
    ProductOrderDTO toDto(ProductOrder s);

    @Named("productName")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "name", source = "name")
    ProductDTO toDtoProductName(Product product);

    @Named("shoppingCartId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ShoppingCartDTO toDtoShoppingCartId(ShoppingCart shoppingCart);
}
