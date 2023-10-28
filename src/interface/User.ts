export interface User {
    id: string,
    fistName: string,
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
    ]
}