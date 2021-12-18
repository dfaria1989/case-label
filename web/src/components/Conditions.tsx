import React, { useEffect, useState } from 'react'
import { getConditions } from "../services/conditions.service";



type ConditionsType = {
    ICD_10: string
    ICD_10_Description: string
}
const Conditions = () => {
    const [conditions, setConditions] = useState<ConditionsType[] | []>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: ConditionsType | any = await getConditions()
            setConditions(data)
        }
        fetchData()
    }, []);

    const conditionOptions = () => {
        if (conditions.length > 0) {
            return conditions.map((condition) => (<option key={condition.ICD_10} value={condition.ICD_10}>
                {condition.ICD_10_Description} {condition.ICD_10}
            </option>))
        }
        return (<option key="0"></option>)
    }

    return (

        <select className="form-select" size={12} aria-label="multiple select example">
            {conditionOptions()}
        </select>
    )
}

export default Conditions
