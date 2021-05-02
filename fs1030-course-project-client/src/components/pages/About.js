import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import home1_imgpic from '../img/portfolio_6.jpg'


const About = () => {
    return (
        <Container>
        <Row className="my-5">
            <Col lg="7">
                <img className="img-fluid rounded mb-4 mb-lg-0" src={home1_imgpic} alt="" />
               
            </Col>
            <Col lg="5">
                <h1 className="font-weight-light">About Me</h1>
                <p>
                    <h2>Hello!</h2> 
                    I am Jannatul Ferdous, a visual designer. Specialized in branding design and UI/UX. Web development is my center of interest, i always love the idea of cross-platform development, 1-n one code base deploy into almost
            any platform, which web technology like Javascript enables me to do. I also like creating Interactive UI components for better UX  and share those desgin and codes  to the world through Github, Codepen and Instagram.
                
                
                </p>
                <Button color="primary" href="/contact">Contact Me</Button>
            </Col>
        </Row>
    </Container>
    )
}

export default About