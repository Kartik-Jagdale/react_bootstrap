import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

import img1 from '../assets/images/img1.jpg'

export default function AppAbout() {
    return (
        <section id='about' className='block about-block'>
            <Container fluid>
                <div className='title-holder'>
                    <h2>About Us</h2>
                    <div className='subtitle'>Learn more about us</div>
                </div>
                <Row>
                    <Col sm> <Image src={img1} /> </Col>
                    <Col sm>  <p>Lorem</p> </Col>
                </Row>
            </Container>
        </section>

    );
}
