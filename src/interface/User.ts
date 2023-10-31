export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    companyName?: string,
    idNumber?: string,
    phoneNumber?: string,
    role: string,
    createdAt: Date,
    myJobPosts?:[
        {id: string,
        ownerId: string}
    ],
    password: string
}