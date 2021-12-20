import { Fragment, useEffect, useState } from 'react'
import { ConditionsType } from 'types';
import { getConditions } from "../services/conditions.service";

const Conditions = () => {
    const [conditions, setConditions] = useState<ConditionsType>();

    useEffect(() => {
        const fetchData = async () => {
            const data: ConditionsType = await getConditions()
            setConditions(data)
        }
        fetchData()
    }, []);

    const conditionOptions = () => {
        if (conditions && (Array.isArray(conditions) && conditions.length > 0)) {
            return conditions.map((condition) => (
                <option key={condition._id} value={condition._id}>
                    {condition.ICD_10_Description} {condition.ICD_10}
                </option>
            ))
        }
        return (<option key="">No conditions available!</option>)
    }

    return (
        <Fragment>
            <select className="form-select" name="condition" size={12} aria-label="multiple select example">
                {conditionOptions()}
            </select>
        </Fragment>
    )
}

export default Conditions
