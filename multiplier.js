// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever 
// the current value is times the number supplied.getCurrentValue should return the last answer returned from multiply.



function Multiplier(numberSupplied){
    this.currentValue = 1;
    this.numberSupplied = numberSupplied;
    

    this.getCurrentValue = function() {
        return this.currentValue;
    }

    this.multiply = function() {
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


function Photo(name,location){
    this.name = name;
    this.location = location;

    this.toString = function(){
    	return this.name;
    }
}

function Album(){
 var fishPhoto = new Photo("Brooke trout", "Uintah Moutains");
 var bearPhoto = new Photo("Grizzly bear", "Missoula, MT");
 var eaglePhoto = new Photo("Bald Eagle", "Big Bear Mountain, CA");
 var carPhoto = new Photo("Supra", "Salt Lake City, UT");
 var photos = [fishPhoto, bearPhoto, eaglePhoto, carPhoto];
 var index = 0;

 this.addToPhotos = function(photo){
 	photos.push(photo); 
 }

 this.listAllPhotos = function(){
 	return photos.toString();
 }

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



var Person = function(name){
  this.name = name;
  this.type = 'human';
  }

Person.prototype.toString = function(){
  console.log("Name:", this.name, "Type:", this.type);
}

Person.prototype.info = function(){
  console.log("Name:", this.name, "Type:", this.type);
}

var Student = function(name){
  Person.apply(this,arguments)
  this.name = name;
  this.type = 'student';

  this.study = function(){
    console.log("I'm studying");
  }
}

Student.prototype = Person.prototype;        
Student.prototype.constructor = Student;  

Person.prototype.info = function(){
  console.log("Name:", this.name, "Type:", this.type);
}

var Teacher = function(name){
  Person.apply(this,arguments)
  this.name = name;
  this.type = "teacher";

  this.teach = function(){
  console.log("I'm teaching");
  }
}

Teacher.prototype = Person.prototype;
Teacher.prototype.constructor = Teacher; 

var School = function(){
  this.students = [];
  this.teachers = [];

  this.addStudent = function(student){
    this.students.push(student); 
  }
  this.addTeacher = function(teacher){
    this.teachers.push(teacher);
  }
  this.listAllStudents = function(){
  return this.students.toString();
  }
  this.listAllTeachers = function(){
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





