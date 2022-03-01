const db = require('./db')
const Employee = require('./models/employee')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//finding all emplyees

const findEmployees = async () => {
    const allEmployees = await Employee.find ({});
    console.log(allEmployees) 

}

const createOneEmployee = async () => {
    const oneEmployee = new Employee({
        first_name: 'Jonathan',
            last_name: 'Maendez',
            email: 'Jonathan@gmail.com',
            job_title: 'software engineer',
            address: {
                street : '7th Ave',
                city:'New York',
                state:'NY',
                zip: '10060'
                }
                
    })
    await oneEmployee.save()
    console.log('created a new Employee:',oneEmployee) 
}

// create three employees
const createThreeEmployee = async () => {
    const threeEmployees = await Employee.insertMany([
        {
            first_name: 'Jon',
                last_name: 'Maen',
                email: 'Jon@gmail.com',
                job_title: 'cloud engineer',
                address: {
                    street : '11th Ave',
                    city:'New York',
                    state:'NY',
                    zip: '10070'
                    }
        },
        {
        first_name: 'Jonathan',
            last_name: 'Maendez',
            email: 'Jonathan@gmail.com',
            job_title: 'software engineer',
            address: {
                street : '7th Ave',
                city:'New York',
                state:'NY',
                zip: '10060'
                }
    },
    {
        first_name: 'Godbless',
            last_name: 'Nana',
            email: 'godbless@gmail.com',
            job_title: 'software engineer I',
            address: {
                street : '2nd Ave',
                city:'New York',
                state:'NY',
                zip: '10030'
                }
    }],
    )
    // await threeEmployees.save()
    console.log('created three new Employees:',threeEmployees) 
}

//update one employee

const updateEmployee = async () => {
    const updated = await Employee.updateOne(
        {
            first_name: 'Nana',
            last_name: 'Asamoah',

        },
        {
        first_name: 'Akwasi',
        last_name: 'Amankwah',
        email: 'nana@gmail.com',
        job_title: 'Economist',
        address: {
            street : 'convent Ave',
            city:'Bronx',
            state:'NY',
            zip: '10010'
            }
           
    })
    console.log(updated) 
}

const deleteEmployee = async () => {
    const deleted = await Employee.deleteOne({ first_name: "Godfred" })
    console.log(deleted)
  }
const employeeFullName = async () => {
    const employeeName = await Employee.find ({}, {_id: false, first_name : true, last_name: true});
    console.log(employeeName)
}

const run = async() => {
    await findEmployees()
    // await createOneEmployee()
    // await createThreeEmployee()
    // await updateEmployee()
    // await deleteEmployee()
    // await employeeFullName()
    db.close()
  }
  
  
  run()