package mosig.cloud.store.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CustomerDetailsMapperTest {

    private CustomerDetailsMapper customerDetailsMapper;

    @BeforeEach
    public void setUp() {
        customerDetailsMapper = new CustomerDetailsMapperImpl();
    }
}
