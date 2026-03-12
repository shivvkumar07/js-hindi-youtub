const tinderUser = new Object();

const newUser = {};

newUser.id ="123abc";
newUser.name= "Sammy";
newUser.islogin = false;

// console.log(tinderUser);
// console.log(newUser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
      userfullname :{
        firstname:"hitesh",
        lastname:"chaudhary"
      } 
    }
}



// console.log(regularUser.fullname.userfullname.firstname);


const obj1= {1:"a",  2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"e", 6:"f"};

// const obj3 = {obj1 , obj2 };

// const obj6= Object.assign({}, obj1, obj2, obj4);

const obj3= {...obj1, ...obj2};

console.log(obj3);


const users=[
  {
    id :1,
    email:"h@gmail.com"

  },
  {
    id :2,
    email:"shiv@gmail.com"
  },

  {
    id : 3,
    email:"vijay@gmail.com"
  }
  ,

  {
    id:4 ,
    email: "anuj@gmail.com"
  }
]

console.log(newUser);



const course ={
  courseName:"js in  hindi",
  prince:"999",
  courseInstructor:"hitesh"
}


course.courseInstructor

const {courseInstructor}= course;

console.log(courseInstructor);

