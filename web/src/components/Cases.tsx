import { Form } from 'react-bootstrap';
import { CaseType } from 'types';

const Cases: React.FC<CaseType> = ({ _id, case: caseDescription }) =>
(
    < Form.Group >
        <Form.Control
            id={_id ?? ""}
            value={caseDescription ?? "error occured!"}
            disabled
            as="textarea"
            placeholder=""
            style={{ minHeight: '80vh', width: '100%' }} />
    </Form.Group >
)

export default Cases
