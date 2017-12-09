package ch.renewinkler.cars;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@Data
public class Car {

    @Id
    @GeneratedValue
    private Long id;

    @NonNull
    private String name;
}
