// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever 
// the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.



function Multiplier(numberSupplied){   // creates object Multiplier with numberSupplied parameter
    this.currentValue = 1;        
    this.numberSupplied = numberSupplied;
    this.getCurrentValue = function() {  // method getCurrent value returns the current value
        return this.currentValue;
    }

    this.multiply = function() {   // method multiply returns the current value which is the current value times number supplied
        this.currentValue  = (this.currentValue * this.numberSupplied);
    }
}

var myMultiplier = new Multiplier(15);     

myMultiplier.multiply();
myMultiplier.getCurrentValue();




// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific 
// photo by the order it was added. Each Photo should store the photo's file name and 
// the location the photo was taken in as strings.


function Photo(name,location){    // create Photo object with name and location arguments
    this.name = name;
    this.location = location;

    this.toString = function(){
    	return this.name;
    }
}

function Album(){     // album object that holds all the photos and photos array
 var fishPhoto = new Photo("Brooke trout", "Uintah Moutains");
 var bearPhoto = new Photo("Grizzly bear", "Missoula, MT");
 var eaglePhoto = new Photo("Bald Eagle", "Big Bear Mountain, CA");
 var carPhoto = new Photo("Supra", "Salt Lake City, UT");
 var photos = [fishPhoto, bearPhoto, eaglePhoto, carPhoto];
 var index = 0;
 
 this.addToPhotos = function(photo){  //add a photo by pushing it to the photos array
 	photos.push(photo); 
 }

 this.listAllPhotos = function(){  // lists all the photos
 	return photos.toString();
 }
  //return name of photo found at the given index of the photo array
 this.getPhoto = function(index){
 	return photos[index].toString();
 }

};

//instantiate the object
var album = new Album();
album.listAllPhotos();
album.addToPhotos(new Photo("test", "Kaysville"));
album.getPhoto(2);
album.listAllPhotos();



// Create a prototypical Person object. From this object, extend a Teacher object 
// and a Student object. Each of these objects should have attributes and methods 
// pertinent to what they describe. Also create a School object that should be able 
// to store instances of students and teachers. Make sure to write code afterwards 
// that creates instances of these objects to make sure that what you've written 
// works well and you're able to store the necessary data in each object.



var Person = function(name){  // Person object with name argument
  this.name = name;       // instances of Person
  this.type = 'human';
  }

Person.prototype.toString = function(){  // Person prototype
  console.log("Name:", this.name, "Type:", this.type);
}

Person.prototype.info = function(){
  console.log("Name:", this.name, "Type:", this.type);
}

var Student = function(name){  // Student object 
  Person.apply(this,arguments)
  this.name = name;
  this.type = 'student';

  this.study = function(){   // method to describe what a student does
    console.log("I'm learning!");
  }
}

Student.prototype = Person.prototype;     // student prototype   
Student.prototype.constructor = Student;  

Person.prototype.info = function(){
  console.log("Name:", this.name, "Type:", this.type);
}

var Teacher = function(name){  // Teacher object 
  Person.apply(this,arguments)
  this.name = name;       // instances of Teacher
  this.type = "teacher";

  this.teach = function(){     // method to describe what a teacher does
  console.log("I'm teaching!");
  }
}

Teacher.prototype = Person.prototype;  // teacher prototype
Teacher.prototype.constructor = Teacher; 

var School = function(){   // School object 
  this.students = [];     // student instance
  this.teachers = [];     // teacher instance

  this.addStudent = function(student){   // add Student
    this.students.push(student); 
  }
  this.addTeacher = function(teacher){  // add Teacher
    this.teachers.push(teacher);
  }
  this.listAllStudents = function(){  // lists all Students
  return this.students.toString();
  }
  this.listAllTeachers = function(){  // list all Teachers
  return this.teachers.toString();
  }

}

school = new School();
student = new Student("Henry");
student2 = new Student("Hank");
school.addStudent(student);
school.addStudent(student2);
teacher = new Teacher("Patricia");
teacher2 = new Teacher("Tammy");
school.addTeacher(teacher);
school.addTeacher(teacher2);

school.listAllStudents();
student2.study();
school.listAllTeachers();
teacher2.teach();





