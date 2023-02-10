package mosig.cloud.store.invoice.service.mapper;

import mosig.cloud.store.invoice.domain.Invoice;
import mosig.cloud.store.invoice.domain.Shipment;
import mosig.cloud.store.invoice.service.dto.InvoiceDTO;
import mosig.cloud.store.invoice.service.dto.ShipmentDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Shipment} and its DTO {@link ShipmentDTO}.
 */
@Mapper(componentModel = "spring")
public interface ShipmentMapper extends EntityMapper<ShipmentDTO, Shipment> {
    @Mapping(target = "invoice", source = "invoice", qualifiedByName = "invoiceId")
    ShipmentDTO toDto(Shipment s);

    @Named("invoiceId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    InvoiceDTO toDtoInvoiceId(Invoice invoice);
}
