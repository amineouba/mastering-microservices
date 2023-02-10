package mosig.cloud.store.invoice.service.mapper;

import mosig.cloud.store.invoice.domain.Invoice;
import mosig.cloud.store.invoice.service.dto.InvoiceDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Invoice} and its DTO {@link InvoiceDTO}.
 */
@Mapper(componentModel = "spring")
public interface InvoiceMapper extends EntityMapper<InvoiceDTO, Invoice> {}
