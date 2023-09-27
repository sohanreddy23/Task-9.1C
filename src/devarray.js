import {faker} from '@faker-js/faker'
const devlopers=[
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating':4.5
    },
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating':5.0
    }, 
    {
        'image' : faker.image.avatar(),
        'name' : faker.person.firstName(),
        'Description':faker.person.jobTitle(),
        'rating':5.0
    }
       
]
export default devlopers ;