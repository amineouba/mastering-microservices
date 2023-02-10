package mosig.cloud.store.service.mapper;

import mosig.cloud.store.domain.CustomerDetails;
import mosig.cloud.store.domain.User;
import mosig.cloud.store.service.dto.CustomerDetailsDTO;
import mosig.cloud.store.service.dto.UserDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link CustomerDetails} and its DTO {@link CustomerDetailsDTO}.
 */
@Mapper(componentModel = "spring")
public interface CustomerDetailsMapper extends EntityMapper<CustomerDetailsDTO, CustomerDetails> {
    @Mapping(target = "user", source = "user", qualifiedByName = "userLogin")
    CustomerDetailsDTO toDto(CustomerDetails s);

    @Named("userLogin")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    @Mapping(target = "login", source = "login")
    UserDTO toDtoUserLogin(User user);
}
