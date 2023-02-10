package mosig.cloud.store.productorder.service.mapper;

import mosig.cloud.store.productorder.domain.Customer;
import mosig.cloud.store.productorder.domain.ProductOrder;
import mosig.cloud.store.productorder.service.dto.CustomerDTO;
import mosig.cloud.store.productorder.service.dto.ProductOrderDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ProductOrder} and its DTO {@link ProductOrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductOrderMapper extends EntityMapper<ProductOrderDTO, ProductOrder> {
    @Mapping(target = "customer", source = "customer", qualifiedByName = "customerId")
    ProductOrderDTO toDto(ProductOrder s);

    @Named("customerId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CustomerDTO toDtoCustomerId(Customer customer);
}
