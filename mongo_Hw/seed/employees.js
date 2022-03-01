const db = require('../db');

const Employee = require ('../models/employee');

// debugging errors

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async ()=> {

    const employees = [
        {
            first_name: 'Nana',
            last_name: 'Asamoah',
            email: 'nana@gmail.com',
            job_title: 'geologist',
            address: {
                street : '5th Ave',
                city:'New York',
                state:'NY',
                zip: '10010'}
                
        },
        {
            first_name: 'Godfred',
            last_name: 'Amoah',
            email: 'god@gmail.com',
            job_title: 'chemist',
            address: {
                street : '6th Ave',
                city:'New York',
                state:'NY',
                zip: '10020'
                }
        },
        {
            first_name: 'Bless',
            last_name: 'Asa',
            email: 'blessed@gmail.com',
            job_title: 'cloud engineer',
            address: {
                street : '8th Ave',
                city:'Sayreville',
                state:'NJ',
                zip: '08872'
                }
        },
        {
            first_name: 'JONES',
            last_name: 'MATHEWS',
            email: 'mathews@gmail.com',    
            job_title: 'barber',
            address: {
                street : '10th Ave',
                city:'Newark',
                state:'Nj',
                zip: '08875'
                }
        },
        {
            first_name: 'Felix',
            last_name: 'Judges',
            email: 'felix@gmail.com',
            job_title: 'Pharmacist',
            address: {
                street : '4th Ave',
                city:'Alexandria',
                state:'VA',
                zip: '22306'
                }
        }
    ]
    await Employee.insertMany(employees)
    console.log('Created employees')
}
const run = async () => {
    await main()
    db.close()
  }
  
  run()