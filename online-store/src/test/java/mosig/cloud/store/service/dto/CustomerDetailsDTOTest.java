package mosig.cloud.store.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import mosig.cloud.store.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class CustomerDetailsDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(CustomerDetailsDTO.class);
        CustomerDetailsDTO customerDetailsDTO1 = new CustomerDetailsDTO();
        customerDetailsDTO1.setId(1L);
        CustomerDetailsDTO customerDetailsDTO2 = new CustomerDetailsDTO();
        assertThat(customerDetailsDTO1).isNotEqualTo(customerDetailsDTO2);
        customerDetailsDTO2.setId(customerDetailsDTO1.getId());
        assertThat(customerDetailsDTO1).isEqualTo(customerDetailsDTO2);
        customerDetailsDTO2.setId(2L);
        assertThat(customerDetailsDTO1).isNotEqualTo(customerDetailsDTO2);
        customerDetailsDTO1.setId(null);
        assertThat(customerDetailsDTO1).isNotEqualTo(customerDetailsDTO2);
    }
}
