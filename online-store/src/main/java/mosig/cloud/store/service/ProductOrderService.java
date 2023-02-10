package mosig.cloud.store.service;

import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import mosig.cloud.store.domain.ProductOrder;
import mosig.cloud.store.repository.ProductOrderRepository;
import mosig.cloud.store.service.dto.ProductOrderDTO;
import mosig.cloud.store.service.mapper.ProductOrderMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing {@link ProductOrder}.
 */
@Service
@Transactional
public class ProductOrderService {

    private final Logger log = LoggerFactory.getLogger(ProductOrderService.class);

    private final ProductOrderRepository productOrderRepository;

    private final ProductOrderMapper productOrderMapper;

    public ProductOrderService(ProductOrderRepository productOrderRepository, ProductOrderMapper productOrderMapper) {
        this.productOrderRepository = productOrderRepository;
        this.productOrderMapper = productOrderMapper;
    }

    /**
     * Save a productOrder.
     *
     * @param productOrderDTO the entity to save.
     * @return the persisted entity.
     */
    public ProductOrderDTO save(ProductOrderDTO productOrderDTO) {
        log.debug("Request to save ProductOrder : {}", productOrderDTO);
        ProductOrder productOrder = productOrderMapper.toEntity(productOrderDTO);
        productOrder = productOrderRepository.save(productOrder);
        return productOrderMapper.toDto(productOrder);
    }

    /**
     * Update a productOrder.
     *
     * @param productOrderDTO the entity to save.
     * @return the persisted entity.
     */
    public ProductOrderDTO update(ProductOrderDTO productOrderDTO) {
        log.debug("Request to update ProductOrder : {}", productOrderDTO);
        ProductOrder productOrder = productOrderMapper.toEntity(productOrderDTO);
        productOrder = productOrderRepository.save(productOrder);
        return productOrderMapper.toDto(productOrder);
    }

    /**
     * Partially update a productOrder.
     *
     * @param productOrderDTO the entity to update partially.
     * @return the persisted entity.
     */
    public Optional<ProductOrderDTO> partialUpdate(ProductOrderDTO productOrderDTO) {
        log.debug("Request to partially update ProductOrder : {}", productOrderDTO);

        return productOrderRepository
            .findById(productOrderDTO.getId())
            .map(existingProductOrder -> {
                productOrderMapper.partialUpdate(existingProductOrder, productOrderDTO);

                return existingProductOrder;
            })
            .map(productOrderRepository::save)
            .map(productOrderMapper::toDto);
    }

    /**
     * Get all the productOrders.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public List<ProductOrderDTO> findAll() {
        log.debug("Request to get all ProductOrders");
        return productOrderRepository.findAll().stream().map(productOrderMapper::toDto).collect(Collectors.toCollection(LinkedList::new));
    }

    /**
     * Get all the productOrders with eager load of many-to-many relationships.
     *
     * @return the list of entities.
     */
    public Page<ProductOrderDTO> findAllWithEagerRelationships(Pageable pageable) {
        return productOrderRepository.findAllWithEagerRelationships(pageable).map(productOrderMapper::toDto);
    }

    /**
     * Get one productOrder by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Optional<ProductOrderDTO> findOne(Long id) {
        log.debug("Request to get ProductOrder : {}", id);
        return productOrderRepository.findOneWithEagerRelationships(id).map(productOrderMapper::toDto);
    }

    /**
     * Delete the productOrder by id.
     *
     * @param id the id of the entity.
     */
    public void delete(Long id) {
        log.debug("Request to delete ProductOrder : {}", id);
        productOrderRepository.deleteById(id);
    }
}
