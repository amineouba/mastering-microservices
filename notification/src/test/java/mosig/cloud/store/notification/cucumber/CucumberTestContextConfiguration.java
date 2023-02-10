package mosig.cloud.store.notification.cucumber;

import io.cucumber.spring.CucumberContextConfiguration;
import mosig.cloud.store.notification.IntegrationTest;
import org.springframework.test.context.web.WebAppConfiguration;

@CucumberContextConfiguration
@IntegrationTest
@WebAppConfiguration
public class CucumberTestContextConfiguration {}
