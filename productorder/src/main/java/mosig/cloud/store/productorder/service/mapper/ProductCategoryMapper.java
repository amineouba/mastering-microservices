package mosig.cloud.store.productorder.service.mapper;

import mosig.cloud.store.productorder.domain.ProductCategory;
import mosig.cloud.store.productorder.service.dto.ProductCategoryDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link ProductCategory} and its DTO {@link ProductCategoryDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductCategoryMapper extends EntityMapper<ProductCategoryDTO, ProductCategory> {}
