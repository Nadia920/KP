package by.bsuir.management;

import org.h2.tools.Server;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.sql.SQLException;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"by.bsuir.management.models", "by.bsuir.management.repository"})
public class SpringAngularEmployeeMotivationManagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringAngularEmployeeMotivationManagementApplication.class, args);
	}

}
