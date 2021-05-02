import React from 'react'
import profilepic from '../img/mypic.jpg'
import awesomeTorontopic from '../img/awesomeToronto.JPG'
import portfolio_1pic from '../img/portfolio_1.jpg'
import home1_imgpic from '../img/home1_img.jpg'


import { Container, Row, Col, Button, CardBody, CardTitle, CardText, CardFooter, Card } from 'reactstrap'

const Home = () => {
    return(
        <Container>
            <Row className="my-5">
                
                <Col lg="10">
                   <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
                    <h1 className="font-weight-light"> UI/UX Developer</h1>
                    <p>Specializing in branding and UI/UX design, Jannatul Ferdous's UX Portfolio website certaily demonstrates her skills in both areas. She's crafteed a well-defined visual laguages for her site ,made up of three colors,geometric shapes and vectorlines and penatly of white spaces.</p>
                    <Button color="primary">Hire Me</Button>
                </Col>
            </Row>
            <Card className="text-white bg-secondary my-5 py-4 text-center">
                <CardBody>
                    <CardText><p className="text-white m-0">See bolow some of my woderful projects!</p></CardText>
                </CardBody>
            </Card>
            <Row>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Awesome Toronto!</h2></CardTitle>
                            <CardBody></CardBody>
                            <img src={awesomeTorontopic} alt="awesomeTorontopic" className="profilepic"></img>
                        </CardBody>
                        <CardFooter>
                        <Button color="primary" size="sm">Great website to know places to visit Toronto!</Button>
                        
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Todo App</h2></CardTitle>
                            <CardBody></CardBody>
                            <img src={home1_imgpic} alt="awesomeTorontopic" className="profilepic"></img>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">Make Your day Awesome!</Button>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="4" className="mb-5">
                    <Card>
                        <CardBody>
                            <CardTitle><h2>Awesome Website</h2></CardTitle>
                            <CardBody></CardBody>
                            <img src={portfolio_1pic} alt="awesomeTorontopic" className="profilepic"></img>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" size="sm">Awesome Website</Button>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home