/****** Variables and Operators *******
/* Exercise 1 A: Crear dos variables numéricas y utilizar el operador suma para guardar el valor
de la suma de ambos números en una 3er variable.*/

  var workingDaysFirstSemester = 40, workingDaysSecondSemester = 35, daysSum;
  daysSum = workingDaysFirstSemester + workingDaysSecondSemester;
  console.log(daysSum);

/* Exercise 1 B: Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.*/

  var courseName = 'First Certificate', teacherName = 'Juana Perez', courseInformation;
  console.log('The course is: ' + courseName + ', and the teacher is ' + teacherName);
  courseInformation = courseName + teacherName;
  console.log(courseInformation);

/* Exercise 1 C: Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string)
guardando el resultado la suma una 3er variable (utilizar length).*/

  var coursePresents = 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',
  courseAbsents = 'AAAAAAAAAA', presentsAbsentsSum;
  presentsAbsentsSum = coursePresents.length + courseAbsents.length;
  console.log('The total of lessons delivered is ' + presentsAbsentsSum);

//****** Strings ******
/* Exercise 2 A: Crear una variable de tipo string con al menos 10 caracteres
y convertir todo el texto en mayúscula (utilizar toUpperCase).*/

  var courseObjective = 'To prepare students for the First Certificate Exam delivered by Cambridge University';
  console.log('To prepare students for the First Certificate Exam delivered by Cambridge University'
  .toUpperCase(courseObjective));

/* Exercise 2 B: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

  var numberOfStudents = 'There are ten students enrolled in the First Cerificate course';
  console.log(numberOfStudents.substring(0,5));

/* Exercise 2 C: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

  console.log(numberOfStudents.substring(59,62));

/* Exercise 2 D: Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con
la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

  var nameOfFollowingCourse = 'cONSOLIDATION';
  console.log(nameOfFollowingCourse.substring(0,1).toUpperCase() + nameOfFollowingCourse.substring(1,14).toLowerCase());

/* Exercise 2 E: Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

  var courseDuration = 'March to December';
  console.log(courseDuration.indexOf(' '));

/* Exercise 2 F: Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio
entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra
de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase
y el operador +).*/

  var typeOfDegree = 'INTERNATIONAL CERTIFICATE';
  console.log(typeOfDegree.substring(0,1).toUpperCase() + typeOfDegree.substring(1,13).toLowerCase() +
  typeOfDegree.substring(typeOfDegree.indexOf(' '),15).toUpperCase() + typeOfDegree.substring(15,25).toLowerCase());

//****** Arrays ******
/* Exercise 3 A: Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).*/

  var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  console.log(monthsOfYear[4]);
  console.log(monthsOfYear[10]);

/* Exercise 3 B: Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/

  console.log(monthsOfYear.sort());

/* Exercise 3 C: Agregar un elemento al principio y al final del array (utilizar unshift y push).*/

  monthsOfYear.unshift('Months');
  console.log(monthsOfYear);
  monthsOfYear.push('End of List');
  console.log(monthsOfYear);

/* Exercise 3 D: Quitar un elemento del principio y del final del array (utilizar shift y pop).*/

  monthsOfYear.shift(0);
  console.log(monthsOfYear);
  monthsOfYear.pop(11);
  console.log(monthsOfYear);

/* Exercise 3 E: Invertir el orden del array (utilizar reverse)*/

  monthsOfYear.reverse();
  console.log(monthsOfYear);

/* Exercise 3 F: Unir todos los elementos del array en un único string donde cada mes este separado por un guión
- (utilizar join).*/

  var myVarJoined = monthsOfYear.join('-');
  console.log(myVarJoined);

/* Exercise 3 G: Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

  var string1 = monthsOfYear.slice(4,-1);
  console.log(string1);

//****** IF ELSE ******
/* Exercise 4 A: Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual
que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”.*/

  var examGrades = Math.random();
  if (examGrades > 0,5){
    alert('Greater than 0,5');
    }else{
      alert('Lower than 0,5')
  }

/*Exercise 4 B: Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes
de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años*/

  var age = 29;
  if (age < 2){
    alert('Bebé')
    }else if ((age => 2) && (age <= 12)){
      alert('Niño')
      }else if ((age > 12) && (age <= 19)){
        alert('Adolescente')
        }else if ((age >= 20) && (age <= 30)){
          alert('Joven')
          }else if ((age > 30) && (age <= 60)){
            alert('Adulto')
            }else if ((age >= 61) && (age <= 75)){
              alert('Adulto mayor')
              }else if (age > 75){
                alert('Anciano')
  }

//****** FOR ******
/*Exercise 5 A: Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
for de JavaScript para mostrar una alerta utilizando cada una de las palabras.*/

  var skills = ['listening', 'writing', 'reading', 'use of english', 'speaking'];
  for (var i = 0; i < 5; i++){
    alert(skills[i]);
  }

/* Exercise 5 B: Al array anterior convertir la primera letra de cada palabra en mayúscula
y mostrar una alerta por cada palabra modificada.*/

  for (var i = 0; i < 5; i++){
  alert (skills[i].substring(0,1).toUpperCase() + skills[i].substring(1,15));
  }

/*Exercise 5 C: Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a)
recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una
única alerta con la cadena completa.*/

var sentence = '', separator = ' ';
  for (var i = 0; i < 5; i++) {
    if (sentence) {sentence += separator;}
    sentence += skills [i];
  }
    alert (sentence);

/*Exercise 5 D: Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número
de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array,
desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).*/

  var empty = [];
  for (var i = 0; i < 10; i++){
  empty[i]=i;
  }
    console.log(empty);