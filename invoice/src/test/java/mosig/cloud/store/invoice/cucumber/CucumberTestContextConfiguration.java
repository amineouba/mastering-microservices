package mosig.cloud.store.invoice.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import mosig.cloud.store.invoice.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
