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
};

function Album(){     // album object that holds all the photos and photos array
    this.photos = [];
    this.addToPhotos = function(photo){  //add a photo by pushing it to the photos array
      this.photos.push(photo)
 };

 this.listAllPhotos = function(){  // lists all the photos
 	  var pictures = ''; 
    for (var i = 0; i < this.photos.length; i++){
      if (i === 0){
        pictures += this.photos[i].name;
      } else {
        pictures += ', ' + this.photos[i].name;
      }
    }
    return pictures;
 }
  //return name of photo found at the given index of the photo array
 this.getPhoto = function(index){
 	return this.photos[index];
 }

};

 var fishPhoto = new Photo("Brooke trout", "Uintah Moutains");
 var bearPhoto = new Photo("Grizzly bear", "Missoula, MT");
 var eaglePhoto = new Photo("Bald Eagle", "Big Bear Mountain, CA");
 var carPhoto = new Photo("Supra", "Salt Lake City, UT");
 var album1 = new Album();
//call the functions
album1.addToPhotos(fishPhoto);
album1.addToPhotos(bearPhoto);
album1.addToPhotos(eaglePhoto);
album1.addToPhotos(carPhoto);

console.log(album1.listAllPhotos());
console.log(album1.getPhoto(2));


// Create a prototypical Person object. From this object, extend a Teacher object 
// and a Student object. Each of these objects should have attributes and methods 
// pertinent to what they describe. Also create a School object that should be able 
// to store instances of students and teachers. Make sure to write code afterwards 
// that creates instances of these objects to make sure that what you've written 
// works well and you're able to store the necessary data in each object.



function Person(name, sex){  // Person object with name and sex arguement
  this.name = name;       
  this.sex = sex;          
};

function Teacher(name, sex, course){
  Person.call(this, name, sex); // inherits Person parameters
  this.course = course;
};

function Student(name, sex, age){  // Student object 
  Person.call(this, name, sex);   // inherits Person parameters
  this.age = age;
};
  
function School(){   // school object with instances of student and teacher
  this.student1 = new Student('Jamie', 'Female', '21');
  this.teacher1 = new Teacher('Robert', 'Male', 'History 1050');
};

// instance of school
var school1 = new School();

// instances of student ad teacher
console.log(school1.student1);
console.log(school1.teacher1);



