import React, { useEffect } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';


function Home(props){

  useEffect(()=>{
    document.title = "Home"
  }, []);

  return (
    <div>
      <Jumbotron className="text-center">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <Container className="lead">
          <Button color="primary">Learn More</Button>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;