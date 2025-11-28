import React, { useState } from 'react'

const Form = () => {
    const [emp, setEmp] = useState({
        ename: '',
        esalary: '',
        gender: '',
        hobbies: []
    });
    const [list, setList] = useState([]);
    const [editId, setEditId] = useState(null);
    const [errors, setErrors] = useState({});
    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            // name = "hobbies" and value = "coding" / "reading" / "writing"
            const prev = emp.hobbies || [];
            let updated;
            if (checked) {
                updated = [...prev, value];
            } else {
                updated = prev.filter((h) => h !== value);
            }
            setEmp({ ...emp, hobbies: updated });
        } else {
            setEmp({ ...emp, [name]: value });
        }
    }
    const handleForm = (e) => {
        e.preventDefault();
        if (validateForm()) return;
        if (!editId) {
            setList([...list, { ...emp, id: Date.now() }]);
        } else {
            let data = list.map((val) => {
                if (val.id = editId) {
                    return { ...val, ...emp };
                } else {
                    return val;
                }
            })
            setList(data);
            setEditId(null);
        }
        setEmp({ ename: '', esalary: '' });
    }
    const handleEdit = (id) => {
        let editData = list.find(val => val.id = id);
        setEmp(editData);
        setEditId(id);
    }
    const handleDelete = (id) => {
        const data = list.filter(val => val.id != id);
        setList(data);
    }

    const validateForm = () => {
        let errors = {};
        if (!emp.ename) {
            errors.ename = "Employee name is required";
        }
        if (!emp.esalary) {
            errors.esalary = "Employee salary is required";
        }
        setErrors(errors);
        return Object.keys(errors).length != 0;
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form method="post" onSubmit={handleForm} >
                            <div className="mb-3">
                                <label htmlFor="ename" className="form-label">Employee Name</label>
                                <input type="name" value={emp.ename} name='ename' onChange={handleInput} className="form-control" id="ename" aria-describedby="ename" />
                                {errors.ename ? <span className="text-danger">{errors.ename}</span> : ''}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="esalary" className="form-label">Employee Salary</label>
                                <input type="number" value={emp.esalary} name='esalary' onChange={handleInput} className="form-control" id="esalary" />
                                {errors.esalary ? <span className="text-danger">{errors.esalary}</span> : ''}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label">Gender: </label>
                                <label htmlFor="male" className='ms-2'>Male</label>
                                <input type="radio" name='gender' value="male" onChange={handleInput} checked={emp.gender == 'male'} />
                                <label htmlFor="female" className='ms-2'>Female</label>
                                <input type="radio" name='gender' value="female" onChange={handleInput} checked={emp.gender == 'female'} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender" className="form-label me-2">Hobbies: </label>
                                <input type="checkbox" name="coding" id="coding" className='ms-2' />
                                <label htmlFor="coding">Coding</label>
                                <input type="checkbox" name="reading" id="reading" className='ms-2' />
                                <label htmlFor="reading">Reading</label>
                                <input type="checkbox" name="writing" id="writing" className='ms-2' />
                                <label htmlFor="writing">Writing</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className='table  table-striped'>
                            <thead>
                                <tr>
                                    <th>Sr.no</th>
                                    <th>Emp Name</th>
                                    <th>Emp Salary</th>
                                    <th>Gender</th>
                                    <th>Hobbies</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.length != 0 ?
                                    list.map((employee, index) => (
                                        <tr key={employee.id}>
                                            <td>{index + 1}</td>
                                            <td>{employee.ename}</td>
                                            <td>{employee.esalary}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.hobbies}</td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => handleDelete(employee.id)}>Delete</button>
                                                <button className='btn btn-warning' onClick={() => handleEdit(employee.id)}>Edit</button>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr><td colSpan={5} style={{ textAlign: "center" }}>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Form
