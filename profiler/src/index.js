import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getName(data){
    return data.name;
}

var data = {
    name: 'Andrew Knickman',
    imgUrl: 'https://media.licdn.com/dms/image/C4D03AQF69Qszdoyu0g/profile-displayphoto-shrink_200_200/0?e=1548892800&v=beta&t=-60Zp8ddjxQdHGRUWfuR69EUM8RhESvyED1-_QY1_zI',
    hobbyList: [ 'Game Development and Asset Design',
    'Tabletop Gaming',
    'Photo, Video, and Sound Editing'],
    link: 'https://www.linkedin.com/in/andrewknickman/',
    fullName: 'Andrew Sean Knickman'
}

export default data;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
