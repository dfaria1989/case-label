import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Button, ListGroup, Container, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import Conditions from './Conditions'
interface Props {

}

const Home: React.FC<Props> = () => {
    function alertClicked() {
        alert('You clicked the third ListGroupItem');
    }
    return (
        <Fragment>
            <Header data={null} />
            <hr style={{ height: 2, marginBottom: 15}}/>
            <Container>
                <Row>
                    <Col md={7}> 
                                <FloatingLabel controlId="floatingTextarea2" label="Patient is an 42 year old male. Chief Complaint: Establish Care and Physical HPI Hemorrhoids Bothersome Comes and goes Especially with sedentary life style Recently worse Couple nights where almost wakes patient up Gets intermittently constipated High fiber diet Patient Active Problem Diagnoses Code - Hemorrhoids 455.6E No outpatient prescriptions have been marked as taking for the encounter (Office Visit) with , C. Allergies Allergen Reactions - Pcn (Penicillins) - Morphine No past medical history on file. Past Surgical History Procedure Date - Hx knee surgery Arthroscopy age 15 for torn meniscus Family History Problem Relation of Onset - Cancer Mother Breast - Hypertension Mother - Hypertension Father History Substance Use Topics - Smoking status: Never Smoker - Smokeless tobacco: Not on file ">
                                    <Form.Control
                                    disabled
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ minHeight: '80vh' , width: '100%' }}
                                    />
                                </FloatingLabel>
                    </Col>

                    <Col md={5}>
                        <Conditions/>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Home
