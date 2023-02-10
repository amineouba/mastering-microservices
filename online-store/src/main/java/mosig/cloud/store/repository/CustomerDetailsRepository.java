package mosig.cloud.store.repository;

import java.util.List;
import java.util.Optional;
import mosig.cloud.store.domain.CustomerDetails;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Spring Data JPA repository for the CustomerDetails entity.
 */
@Repository
public interface CustomerDetailsRepository extends JpaRepository<CustomerDetails, Long> {
    default Optional<CustomerDetails> findOneWithEagerRelationships(Long id) {
        return this.findOneWithToOneRelationships(id);
    }

    default List<CustomerDetails> findAllWithEagerRelationships() {
        return this.findAllWithToOneRelationships();
    }

    default Page<CustomerDetails> findAllWithEagerRelationships(Pageable pageable) {
        return this.findAllWithToOneRelationships(pageable);
    }

    @Query(
        value = "select distinct customerDetails from CustomerDetails customerDetails left join fetch customerDetails.user",
        countQuery = "select count(distinct customerDetails) from CustomerDetails customerDetails"
    )
    Page<CustomerDetails> findAllWithToOneRelationships(Pageable pageable);

    @Query("select distinct customerDetails from CustomerDetails customerDetails left join fetch customerDetails.user")
    List<CustomerDetails> findAllWithToOneRelationships();

    @Query("select customerDetails from CustomerDetails customerDetails left join fetch customerDetails.user where customerDetails.id =:id")
    Optional<CustomerDetails> findOneWithToOneRelationships(@Param("id") Long id);
}
