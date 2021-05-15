import react from 'react'
import { Button, Container, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'
import url from './../api/bootAPI'

const Update = (course) =>{
    useEffect(() => {
        document.title = `UpdateCourse`;
      }, [] );
const [course, setCourse] = useState({})
//form handler function
const handleForm = (e) => {
    postDataToServer(course)
    console.log(course)
    e.preventDefault()
}
//creating function to post data on server
const postDataToServer = (course) => {
    axios.post(`${url}/update`, course).then(
        (Response)=> {
            console.log(Response)
            console.log("success")
            toast.success("Course has been Added!!")
        },
        (error)=> {
            console.log(error)
            console.log("error")
            toast.error("oops!! Error occured")
        }
    )
}
    return (
        <Fragment>
            <h1>UPDATE COURSE DETAILS</h1>      
            <form onSubmit={handleForm}>
                <FormGroup className="p-3 m-3">
                    <label>Course Name-</label>
                    <Input type="text" placeholder="Course Name" name="title" id="title" 
                    onChange= {(e)=> {
                    setCourse({...course, title:e.target.value})
                }}
                    />
                </FormGroup>

                <FormGroup className="p-3 m-3">
                    <Label>Course Desc-</Label>
                    <Input type="textArea" placeholder="Course Description" name="desc" style={{height: 100}} 
                    onChange={(e)=>{
                        setCourse({...course, desc:e.target.value})
                    }}
                    
                    />
                </FormGroup>
                <Container className="text-center">
                <Button type="submit" color="success" className="p-2 m-2 ">Submit</Button>
                <Button type="reset" className="p-2 m-2" color="warning" onClick={()=> {
                    setCourse({})
                }} >Clear</Button>
                </Container>
            </form>
        </Fragment>
    )
}