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
  console.log(typeOfDegree.substring(0,1).toUpperCase() + typeOfDegree.substring(1,13).toLowerCase() + typeOfDegree.substring(typeOfDegree.indexOf(' '),15).toUpperCase() + typeOfDegree.substring(15,25).toLowerCase());

