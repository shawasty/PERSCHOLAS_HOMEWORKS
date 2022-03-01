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



const run = async() => {
    await findEmployees()
    // await createOneEmployee()
    // await createThreeEmployee()
    // await updateEmployee()
    // await deleteEmployee()
    db.close()
  }
  
  
  run()