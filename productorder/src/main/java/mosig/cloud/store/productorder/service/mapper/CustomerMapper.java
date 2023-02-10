package mosig.cloud.store.productorder.service.mapper;

import mosig.cloud.store.productorder.domain.Customer;
import mosig.cloud.store.productorder.service.dto.CustomerDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Customer} and its DTO {@link CustomerDTO}.
 */
@Mapper(componentModel = "spring")
public interface CustomerMapper extends EntityMapper<CustomerDTO, Customer> {}
