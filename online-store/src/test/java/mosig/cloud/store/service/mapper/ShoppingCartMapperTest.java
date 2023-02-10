package mosig.cloud.store.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ShoppingCartMapperTest {

    private ShoppingCartMapper shoppingCartMapper;

    @BeforeEach
    public void setUp() {
        shoppingCartMapper = new ShoppingCartMapperImpl();
    }
}
