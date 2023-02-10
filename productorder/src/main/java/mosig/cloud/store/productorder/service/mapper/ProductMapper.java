package mosig.cloud.store.productorder.service.mapper;

import mosig.cloud.store.productorder.domain.Product;
import mosig.cloud.store.productorder.domain.ProductCategory;
import mosig.cloud.store.productorder.service.dto.ProductCategoryDTO;
import mosig.cloud.store.productorder.service.dto.ProductDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Product} and its DTO {@link ProductDTO}.
 */
@Mapper(componentModel = "spring")
public interface ProductMapper extends EntityMapper<ProductDTO, Product> {
    @Mapping(target = "productCategory", source = "productCategory", qualifiedByName = "productCategoryId")
    ProductDTO toDto(Product s);

    @Named("productCategoryId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ProductCategoryDTO toDtoProductCategoryId(ProductCategory productCategory);
}
