function getName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Andrew',
    lastName: 'Knickman'
}

const jsxElement = (
    <h1>
        Student Name: {getName(user)}
    </h1>
);