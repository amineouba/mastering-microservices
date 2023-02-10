package mosig.cloud.store.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import mosig.cloud.store.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
