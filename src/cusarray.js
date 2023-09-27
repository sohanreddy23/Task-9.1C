import {faker} from '@faker-js/faker'
const customers=[
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating': 4.0
    },
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating': 4.5
    }, 
    {
        'logo' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating': 5.0
    }
       
]
export default customers ;