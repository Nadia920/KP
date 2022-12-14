package by.bsuir.management.controller;

import by.bsuir.management.models.*;
import by.bsuir.management.services.*;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@AllArgsConstructor
@RequestMapping("/Admin")
public class AdminResource {

    @Autowired
    private TypeFinancialMotivationService typeFinancialMotivationService;
    @Autowired
    private TypeNonFinancialMotivationService typeNonFinancialMotivationService;
    @Autowired
    private EventService eventService;
    @Autowired
    private WorkStatisticService workStatisticService;
    @Autowired
    private MethodOfMotivationInvolvedService methodOfMotivationInvolvedService;
    @Autowired
    private PunishmentService punishmentService;
    @Autowired
    private ApartmentService apartmentService;
    @Autowired
    private CryptocurrencyService cryptocurrencyService;
    @Autowired
    private BonusService bonusService;
    @Autowired
    private PaymentService paymentService;
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private HRManagerService hrManagerService;
    @Autowired
    private ShareService shareService;

    @GetMapping(path = {"/finMotivation"})
    public ResponseEntity<List<TypeFinancialMotivation>> finMotivation(Model model){
        List<TypeFinancialMotivation> typesFinancialMotivation = typeFinancialMotivationService.findALL();
        return new ResponseEntity<>(typesFinancialMotivation, HttpStatus.OK);
    }

    @GetMapping(path = {"/non-finMotivation"})
    public ResponseEntity<List<TypeNonFinancialMotivation>> nonFinMotivation(Model model){
        List<TypeNonFinancialMotivation> typesNonFinancialMotivation =  typeNonFinancialMotivationService.findALL();
        return new ResponseEntity<>(typesNonFinancialMotivation, HttpStatus.OK);
    }

    @GetMapping(path = {"/event"})
    public  ResponseEntity<List<Event>> allEvent(Model model){
        List<Event> events =  eventService.findAll();
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping(path = {"/employeePerformanceAnalysis"})
    public ResponseEntity<List<WorkStatistic>> employeePerformanceAnalysis(Model model){
        List<WorkStatistic> workStatistics =  workStatisticService.findAll();
        return new ResponseEntity<>(workStatistics, HttpStatus.OK);
    }

    @GetMapping(path = {"/methodsOfMotivationInvolvedComponent"})
    public ResponseEntity<List<MethodOfMotivationInvolved>> methodsMotivation(Model model){
        List<MethodOfMotivationInvolved> methodsOfMotivationInvolved =  methodOfMotivationInvolvedService.findAll();
        return new ResponseEntity<>(methodsOfMotivationInvolved, HttpStatus.OK);
    }

    @GetMapping(path = {"/punishment"})
    public ResponseEntity<List<Punishment>> punishment(Model model){
        List<Punishment> punishments =  punishmentService.findAll();
        return new ResponseEntity<>(punishments, HttpStatus.OK);

    }

    @GetMapping(path = {"/apartments"})
    public ResponseEntity<List<Apartment>> apartments(Model model){
        List<Apartment> apartments =  apartmentService.findAll();
        return new ResponseEntity<>(apartments, HttpStatus.OK);

    }

    @GetMapping(path = {"/cryptocurrency"})
    public ResponseEntity<List<Cryptocurrency>> cryptocurrency(Model model){
        List<Cryptocurrency> cryptocurrencies =  cryptocurrencyService.findAll();
        return new ResponseEntity<>(cryptocurrencies, HttpStatus.OK);
    }

    @GetMapping(path = {"/bonus"})
    public ResponseEntity<List<Bonus>> bonus(Model model){
        List<Bonus> bonuses =  bonusService.findAll();
        return new ResponseEntity<>(bonuses, HttpStatus.OK);
    }

    @GetMapping(path = {"/payments"})
    public ResponseEntity<List<Payment>> payments(Model model){
        List<Payment> payments =  paymentService.findAll();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }

    @GetMapping(path = {"/shares"})
    public ResponseEntity<List<Share>> shares(Model model){
        List<Share> sharees =  shareService.findAll();
        return new ResponseEntity<>(sharees, HttpStatus.OK);
    }


    /*@GetMapping(path = {"/addMethodOfMotivationInvolvedComponent"})
    public  List<ResponseEntity><MethodOfMotivationInvolved> addMethodsOfMotivation(Model model){
        List<Employee> employessList = employeeService.findAll();
        model.addAttribute("employees", employessList.size() != 0 ? employessList : null);
        List<HRManager> hrManagerList = hrManagerService.findAll();
        model.addAttribute("hrManagers", hrManagerList.size() != 0 ? hrManagerList : null);
        List<TypeFinancialMotivation> typeFinancialMotivationList = typeFinancialMotivationService.findALL();
        model.addAttribute("typesFinancialMotivation", typeFinancialMotivationList.size() != 0 ? typeFinancialMotivationList : null);
        List<TypeNonFinancialMotivation> typeNonFinancialMotivationList = typeNonFinancialMotivationService.findALL();
        model.addAttribute("typesFinancialMotivation", typeNonFinancialMotivationList.size() != 0 ? typeNonFinancialMotivationList : null);
        return new List<ResponseEntity><>(sharees, HttpStatus.OK);
    }*/


    @GetMapping(path = {"/addEvent"})
    public String addEvent(Model model) {
        return "/addEvent";
    }


    @PostMapping(path = {"/saveMethods"})
    public ResponseEntity<MethodOfMotivationInvolved> saveMethods(@RequestBody MethodOfMotivationInvolved methodOfMotivationInvolved) {
        MethodOfMotivationInvolved newMethodOfMotivationInvolved =  methodOfMotivationInvolvedService.saveM(methodOfMotivationInvolved);
        return new ResponseEntity<>(newMethodOfMotivationInvolved, HttpStatus.CREATED);
    }

    /*
    * @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees () {
        List<Employee> employees = employeeService.findAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Employee> getEmployeeById (@PathVariable("id") Long id) {
        Employee employee = employeeService.findEmployeeById(id);
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee newEmployee = employeeService.addEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestBody Employee employee) {
        Employee updateEmployee = employeeService.updateEmployee(employee);
        return new ResponseEntity<>(updateEmployee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable("id") Long id) {
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    * */



}
