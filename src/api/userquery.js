const userdata = `
    _id
    username
    password
    email
`;

export const userquery = `
query user($username:String,$password:String){
    user(username:$username,password:$password){
        ${userdata}
    }
}
`;

export const userquery_create = `
mutation cuser($username:String,$password:String,$email:String){
    createuser(username:$username,password:$password,email:$email){
        ${userdata}
    }
}
`;
