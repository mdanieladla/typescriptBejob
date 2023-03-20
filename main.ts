import {Person} from './persona';
import {Direction} from './direccion';
import {Phone} from './telefono';
import {Mail} from './mail';

const person1: Person = new Person(
    "Letizia",
    "Pérez",
    31,
    "34523454L",
    new Date("03-03-1991"),
    "rosa palo",
    "femenino",
    [new Direction("Calle Maria De Molina", 13, 1, "D", 28010, "Madrid", "Madrid")],
    [new Mail("personal", "pepitap@mail.com")],
    [new Phone("móvil", 654345555)],
    "Hermana de Pepe Perez"
)

const person2: Person = new Person(
    "Lucía",
    "González",
    28,
    "47385938R",
    new Date("12-10-1994"),
    "verde",
    "femenino",
    [new Direction("Calle Corazón Rojo", 1, 3, "A", 28030, "Madrid", "Madrid")],
    [new Mail("trabajo", "lugo12@mail.com")],
    [new Phone("móvil", 643453335)],
    "Wedding Planner"
)

const person3: Person = new Person(
    "Julia",
    "Jiménez",
    26,
    "12345678P",
    new Date("21-01-1996"),
    "violeta",
    "femenino",
    [new Direction("Calle Serrano", 35, 4, "B", 28009, "Madrid", "Madrid")],
    [new Mail("personal", "juji96@mail.com")],
    [new Phone("móvil", 666777888)],
    "Amiga de Letizia"
)

console.log('Data antes del cambio:')
console.log(person1);
console.log(person2);
console.log(person3);

const contacts: Person[] = new Array(person1, person2, person3);
const dniNeeded: string = '34523454L';

const editedPerson: Person = contacts.find(person => person.dni === dniNeeded) as Person;

const newDirection = new Direction(
    "Calle Sol", 5, 5, "C", 28230, "Madrid", "Madrid"
)
const newMail = new Mail(
    "trabajo", "pepap@mail.com"
)
const newPhone = new Phone(
    "trabajo", 634543909
)

editedPerson.addDirection(newDirection);
editedPerson.addMail(newMail);
editedPerson.addPhone(newPhone)

console.log('Data después de los cambios:');
console.log(person1);
console.log(person2);
console.log(person3);