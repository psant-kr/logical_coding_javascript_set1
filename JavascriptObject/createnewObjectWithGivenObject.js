const person = {
    name: "John Doe",
    age: 30,
  };
  const value = {
      work: "Development",
      pay: 1000000
  }
  // const employee = Object.create(person);
  
  // console.log(employee.name); // "John Doe"
  // console.log(employee.age); // 30
  
  const employee = {
    ...person, ...value,
    job: "Software Engineer",
  };
  
  console.log(employee.name); // "John Doe"
  console.log(employee.age); // 30
  console.log(employee.job); // "Software Engineer"
  console.log(employee.pay); // 1000000
  console.log(employee);
  //------------------------------------------------------------
  // function Person(name, age) {
  //   this.name = name;
  //   this.age = age;
  // }
  // const employee = new Person("John Doe", 30);
  
  // console.log(employee.name); // "John Doe"
  // console.log(employee.age); // 30
  
  // const string = new String("Hello, world!");
  // console.log(string);