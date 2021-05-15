import react from 'react'
import {Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle, Container, Button} from 'reactstrap'
import axios from 'axios'
import url from './../api/bootAPI'  
function Course({course, update}){

    const deleteCourse = (title) => {
        axios.delete(`${url}/delete/${title}`).then(
            (response) => {
                console.log(response);
                console.log("Success!!");
                update(title)
            },
            (error) => {
                console.log(error);
                console.log("Error occured!!");
            }

        )
    } 

    return (
        <Card>
            <CardBody className="text-center">
                <CardTitle tag="h4">{course.title}</CardTitle>
                <CardSubtitle tag="h6">{course.desc}</CardSubtitle>
                {/* <CardText>Here we will learn Java for beginners and Here we will learn Java for beginners</CardText> */}
                <Container className="text-center">
                    <Button color="warning" onClick={()=>{
                        
                    }}>UPDATE</Button>


                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.title)
                    }}>DELETE</Button>
                </Container>
            </CardBody>

        </Card>
    )

}

export default Course