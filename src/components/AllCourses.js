import react, { useState, useEffect } from 'react'
import Course from './Course'
import url from './../api/bootAPI'
import axios from 'axios' 
import { toast } from 'react-toastify';

function AllCourses() {
    const axios = require('axios').default;
useEffect(() => {
    document.title="AllCourses"
}, []);

const getCoursesFromServer = () => {
    axios.get(`${url}/courses`).then(
        (Response) => {console.log("Success!!")
        toast.error("Courses loaded successfully")
        setCourses(Response.data)
    },
        (Error) => {console.log("error!!")
    toast.error("Something went wrong")
    }
    )
};

useEffect(()=> {
    getCoursesFromServer();
}, [])

    const [courses, setCourses] = useState([
        // { title: "java", desc: "This is beginner course for Java" },
        // { title: "python", desc: "This is beginner course for Python" },
        // { title: "C++", desc: "This is beginner course for C++" }
    ])

const removeCourse = (title) => {
    setCourses(courses.filter((t)=>t.title != (title)))
}


    return (
        <div className="text-center">
            <h1>ALL COURSES</h1>
            {
                courses.length > 0 ?
                    courses.map((item) => <Course key={item.title} course={item} update = {removeCourse} />) :
                    "No courses are there"
            }

        </div>
    )
}
export default AllCourses