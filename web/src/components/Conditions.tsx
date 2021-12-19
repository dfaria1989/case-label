import React, { Fragment, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { getConditions } from "../services/conditions.service";



type ConditionsType = {
    ICD_10: string
    ICD_10_Description: string,
    _id: string
}

const Conditions = () => {
    const [conditions, setConditions] = useState<ConditionsType[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            console.log("ola")
            const data: ConditionsType | any = await getConditions()
            setConditions(data)
        }
        fetchData()
    }, []);

    const conditionOptions = () => {
        if (conditions.length > 0) {
            return conditions.map((condition) => (<option key={condition._id} value={condition._id}>
                {condition.ICD_10_Description} {condition.ICD_10}
            </option>))
        }
        return (<option key="0"></option>)
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
