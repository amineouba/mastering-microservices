package mosig.cloud.store.service.mapper;

import mosig.cloud.store.domain.CustomerDetails;
import mosig.cloud.store.domain.ShoppingCart;
import mosig.cloud.store.service.dto.CustomerDetailsDTO;
import mosig.cloud.store.service.dto.ShoppingCartDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ShoppingCart} and its DTO {@link ShoppingCartDTO}.
 */
@Mapper(componentModel = "spring")
public interface ShoppingCartMapper extends EntityMapper<ShoppingCartDTO, ShoppingCart> {
    @Mapping(target = "customerDetails", source = "customerDetails", qualifiedByName = "customerDetailsId")
    ShoppingCartDTO toDto(ShoppingCart s);

    @Named("customerDetailsId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CustomerDetailsDTO toDtoCustomerDetailsId(CustomerDetails customerDetails);
}
