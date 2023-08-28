function getEmployeeDetails(employeeId) {
    const employeeData = [
        {id: 1, name: 'sushmitha', age: 30},
        {id: 2, name: 'Jack', age: 25},
        {id: 3, name: 'Hitler', age: 40}
      ];

    return new Promise((resolve, reject) => {  
      const employee = employeeData.find(emp => emp.id === employeeId);
      if (employee) {
        resolve(employee);
      } else {
        reject(new Error('Employee not found'));
      }
    });
  }


  getEmployeeDetails(1 )
    .then(employee =>
         console.log(employee))
    .catch(error => console.error(error));
    console.log('dsfhsjdf')