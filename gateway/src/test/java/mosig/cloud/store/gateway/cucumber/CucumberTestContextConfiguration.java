package mosig.cloud.store.gateway.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import mosig.cloud.store.gateway.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
