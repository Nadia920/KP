package by.bsuir.management.controller;

import by.bsuir.management.models.Employee;
import by.bsuir.management.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RequestMapping("/")
@RestController
public class HomeResource {
    @Autowired
    private EmployeeService employeeService;

    public HomeResource() {
    }

    public HomeResource(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping(value = "/home")
    public void getHomeView(Model model, @AuthenticationPrincipal UserDetails currentUser) {
        model.addAttribute("id", currentUser.getUsername());
    }

    @GetMapping()
    public void index(Model model) { }

    @GetMapping("/login")
    public void login() {

    }


    @GetMapping("/registration")
    public void getSignUpView(Model model) {
        model.addAttribute("user", new Employee());
    }

    @PostMapping(path = "/registration")
    public void registrationClient(@Valid @ModelAttribute("user") Employee client,
                                     BindingResult result,
                                     Model model) {
        try {
            employeeService.save(client, "ROLE_USER");
            Employee user = new Employee();
        } catch (Exception e) {
            model.addAttribute("user", client);
        }

    }
}
