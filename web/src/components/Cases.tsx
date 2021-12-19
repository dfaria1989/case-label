import { useEffect, useState } from 'react'
import { Alert, Form } from 'react-bootstrap';
import { getCases } from "../services/cases.service";

type CasesType = {
    case: string
    _id: string
}

type CaseProps = {
    cases: any
}

const Cases: React.FC<CaseProps> = ({ cases }) => {
    return (
        <Form.Group>
            <Form.Control
                id={cases?._id ?? ""}
                value={cases?.case ?? ""}
                disabled
                as="textarea"
                placeholder=""
                style={{ minHeight: '80vh', width: '100%' }} />
        </Form.Group>
    )
}

export default Cases
