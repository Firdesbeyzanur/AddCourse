import Angular from './images/Angular.jpg';
import Bootstrap from './images/Bootstrap.jpg';
import C from './images/C.jpg';
import FrontEnd from './images/FrontEnd.jpg';
import './Course.css';

const courseMap = {
    Angular, Bootstrap, C, FrontEnd
}

function Course({ courseName }) {
    return (
    <div className='courseDiv'>
        <img className='course' src={courseMap[courseName]} alt="course" />
    </div>
    );
}

export default Course;
