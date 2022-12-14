package by.bsuir.management.models;

import lombok.*;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@Setter
@Table(name = "punishment")
@RequiredArgsConstructor
@AllArgsConstructor
@Data
@DynamicUpdate
public class Punishment extends BaseEntity implements Serializable {
    @NotNull
    @Column(name = "misconduct", length = 15)
    private String misconduct;
    @NotNull
    @Column(name = "judgment", length = 15)
    private String judgment;
    @ManyToOne(optional = false, cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    @JoinColumn(name = "employee_id")
    private Employee employee;
}
