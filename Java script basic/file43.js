
// nested destructuring

const users=[

    {userId: 1,firstName: `shahrier`,gender: `male`},
    {userId: 2,firstName: `hossain`,gender: `male`},
    {userId: 3,firstName: `adnan`,gender: `male`}
    
    
    ]

    // const[{firstName}, ,{gender}]=users;
    const[{firstName:user1firstName,userId}, ,{gender:user3gender}]=users;

    console.log(user1firstName);
    console.log(userId)
    console.log(user3gender);


