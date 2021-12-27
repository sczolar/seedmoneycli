const userdata = `
    _id
    username
    password
    email
    roll
`;

const information = `
    _id
    farmerid
    farmer_name
    cane
    quality_li
    quality
    date
    place
    dairyform
    snf
    fat
    packed_date
    tid
`;

export const userquery = `
query user($username:String,$password:String){
    user(username:$username,password:$password){
        ${userdata}
    }
}
`;

export const userquery_create = `
mutation cuser($username:String,$password:String,$email:String,$roll:String){
    createuser(username:$username,password:$password,email:$email,roll:$roll){
        ${userdata}
    }
}
`;

export const create_info = `
mutation info($farmerid:String,
    $farmer_name:String,
    $cane:String,
    $quality_li:String,
    $quality:String,
    $date:String,
    $place:String,
    $dairyform:String,
    $snf:String,
    $fat:String,
    $packed_date:String,
    $tid:String
)
{
    createinfo(farmerid:$farmerid
    farmer_name:$farmer_name
    cane:$cane
    quality_li:$quality_li
    quality:$quality
    date:$date
    place:$place
    dairyform:$dairyform
    snf:$snf
    fat:$fat
    packed_date:$packed_date
    tid:$tid
    )
    {
        ${information}
    }

}
`;

export const getinfo = `
query getinfo($_id:String,$hash:String){
    getinfoid(_id:$id,hash:$hash){
        ${information}
    }
}
`;

export const Tid_verify = `
query Verify($tid:ID){
    getTid(tid:$tid)
}
`;

export const ETEdetail = `
query ete($tid:String){
    transdetail(tid:$tid){
        ${information}
    }
}
`