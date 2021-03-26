//****** Variables and Operators *******
//****** Exercise 1 A *******
  var workingDaysFirstSemester, workingDaysSecondSemester, daysSum;

  workingDaysFirstSemester = 40;
  workingDaysSecondSemester = 35;

  daysSum = workingDaysFirstSemester + workingDaysSecondSemester;

  console.log(daysSum);

//****** Exercise 1 B ******
  var courseName, teacherName, courseInformation;

  courseName = 'First Certificate';
  teacherName = 'Juana Perez';
  console.log('The course is: ' + courseName + ', and the teacher is ' + teacherName);

  courseInformation = courseName + teacherName;
  console.log(courseInformation);

//****** Exercise 1 C ******
  var coursePresents, courseAbsents, presentsAbsentsSum;

  coursePresents = 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP';
  courseAbsents = 'AAAAAAAAAA'
  presentsAbsentsSum = coursePresents.length + courseAbsents.length;

  console.log('The total of lessons delivered is ' + presentsAbsentsSum);

//****** Strings ******
//****** Exercise 2 A *******
  var courseObjective;

  courseObjective =  'To prepare students for the First Certificate Exam delivered by Cambridge University'
  console.log('To prepare students for the First Certificate Exam delivered by Cambridge University'.toUpperCase(courseObjective));

//****** Exercise 2 B ******
  var numberOfStudents;
  numberOfStudents = 'There are ten students enrolled in the First Cerificate course';
  console.log(numberOfStudents.substring(0,5));

  //****** Exercise 2 C ******
  var numberOfStudents;
  numberOfStudents = 'There are ten students enrolled in the First Cerificate course';
  console.log(numberOfStudents.substring(59,62));

  //****** Exercise 2 D ******
  var nameOfFollowingCourse;
  nameOfFollowingCourse = 'cONSOLIDATION'
  console.log(nameOfFollowingCourse.substring(0,1).toUpperCase() + nameOfFollowingCourse.substring(1,14).toLowerCase());

  //****** Exercise 2 E ******
  var courseDuration;
  courseDuration = 'March to December'
  console.log(courseDuration.indexOf(' '));

  //****** Exercise 2 F ******
  var typeOfDegree;
  typeOfDegree = 'INTERNATIONAL CERTIFICATE'
  console.log(typeOfDegree.substring(0,1).toUpperCase() + typeOfDegree.substring(1,13).toLowerCase() +
  typeOfDegree.substring(typeOfDegree.indexOf(' '),15).toUpperCase() + typeOfDegree.substring(15,25).toLowerCase());

//****** Arrays ******
//****** Exercise 3 A *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  console.log(monthsOfYear[4]);
  console.log(monthsOfYear[10]);

//****** Exercise 3 B *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  console.log(monthsOfYear.sort());

//****** Exercise 3 C *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  monthsOfYear.unshift('Months');
  console.log(monthsOfYear);
  monthsOfYear.push('End of List');
  console.log(monthsOfYear);

//****** Exercise 3 D *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  monthsOfYear.shift(0);
  console.log(monthsOfYear);
  monthsOfYear.pop(11);
  console.log(monthsOfYear);

//****** Exercise 3 E *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  monthsOfYear.reverse();
  console.log(monthsOfYear);

//****** Exercise 3 F *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  var myVarJoined = monthsOfYear.join('-');
  console.log(myVarJoined);

//****** Exercise 3 G *******
  var monthsOfYear;
  monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
  'October', 'November', 'December'];
  var string1 = monthsOfYear.slice(4,-1);
  console.log(string1);

//****** IF ELSE ******
//****** Exercise 4 A *******
var examGrades = Math.random();
if (examGrades > 0,5){
  console.log('Greater than 0,5');
  }else{ console.log('Lower than 0,5')
}
//****** Exercise 4 B *******
var age = 29;
if (age < 2){
  console.log('Bebé')
}else if ((age => 2) && (age <= 12)){
  console.log('Niño')
}else if ((age > 12) && (age <= 19)){
  console.log('Adolescente')
}else if ((age >= 20) && (age <= 30)){
  console.log('Joven')
}else if ((age > 30) && (age <= 60)){
  console.log('Adulto')
}else if ((age >= 61) && (age <= 75)){
  console.log('Adulto mayor')
}else if (age > 75){
  console.log('Anciano')
}