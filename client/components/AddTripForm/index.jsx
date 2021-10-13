import React, {useState} from 'react'

const defaultFormValues = {
    description: "",
    startDate: "",
    endDate: "",
}

// Don't do this
const formStyle ={
    width: '50%',
}

function AddTripForm({location, lat, lng}) {
    const [formValues, setFormValues] = useState(defaultFormValues)

    async function handleFormSubmit(event){
        event.preventDefault()
        try{
            console.log(formValues)
            window.alert(formvalues)
            const response = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formValues)
        })
        } catch(error) {
            console.log(error)
        }
    }

    return (<form onSubmit={handleFormSubmit} style={formStyle}>
        <div>
            <h2>Add Trip Tester</h2>
            <label htmlFor="form-description">Description</label>
            <div>
                <textarea id="form-description" name="description" value={formValues.description} onChange={e=>setFormValues(prevState=>{
                    return {
                        ...prevState,
                        description: e.target.value
                    }
                })}></textarea>
            </div>
        </div>
        <div>
            <label htmlFor="form-startDate">Start Date</label>
            <input id="form-startDate" type="date" name="startDate" value={formValues.startDate} onChange={e=>setFormValues(prevState=>{
                return {
                    ...prevState,
                    startDate: e.target.value
                }
            })}></input>
        </div>
        <div>
            <label htmlFor="form-endDate">End Date</label>
            <input id="form-endDate" type="date" name="endDate" value={formValues.endDate} onChange={e=>setFormValues(prevState=>{
                return {
                    ...prevState,
                    endDate: e.target.value
                }
            })}></input>
        </div>
        <div>
            <input type="submit" value="Add Trip"></input>
        </div>
    </form>)
}

export default AddTripForm;