import React, { Fragment, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Button, Row, Col, Alert, Container, Form } from 'react-bootstrap';
import Conditions from './Conditions'
import { labelCaseCondition } from "../services/cases.service";
import { getCases } from "../services/cases.service";
import Cases from './Cases';
import { CaseType } from 'types';

type Props = {}
const noMoreCasesAlert = () => {
    return (
        <Alert variant="success">
            <Alert.Heading>You are Done!</Alert.Heading>
        </Alert>
    )
}

const Home: React.FC<Props> = () => {
    const [nextCase, setNextCase] = useState<null | string>(null)
    const [showCases, setShowCases] = useState<boolean| null>(null)
    const [cases, setCases] = useState<CaseType>();

    const labelCase = async (e: any) => {
        e.preventDefault()
        if (!e.currentTarget[1].value) {
            noMoreCasesAlert()
            alert("Select the condition!")
            return
        }
        const caseToLabel = {
            caseId: e.currentTarget[0].id,
            conditionId: e.currentTarget[1].value
        }

        await labelCaseCondition(caseToLabel)
        //set with current case id
        setNextCase(caseToLabel.caseId)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data: CaseType | any = await getCases()
            if (data) {
                setCases(data)
                setShowCases(true)
            } else {
                setShowCases(false)
            }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nextCase]);

    const renderCaseLabelsMenu = () => {
        return (
            <Fragment>
                <Col md={7} style={{ padding: 5 }}>
                    <Cases  {...cases!} />
                </Col>
                <Col md={5} style={{ padding: 5 }}>
                    <Conditions />
                    <Button className="float-end" style={{ marginTop: "40%" }} type="submit" variant="primary">Next Case</Button>
                </Col>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <Header data={null} />
            <hr style={{ height: 2, marginBottom: 15 }} />

            <Container>
                <Form onSubmit={labelCase} className='form'>
                    <Row>
                        {(showCases && renderCaseLabelsMenu()) || (showCases===false && noMoreCasesAlert())}
                    </Row>
                </Form>
            </Container>
        </Fragment>
    )
}

export default Home