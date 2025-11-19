import React from 'react'
import { useState } from 'react';
import App from './../../../day-1/src/App';

const Form = () => {
    const [emp,setEmp] = useState({});

    const [list,setList] = useState([]);
    
    const handleInput=(e)=>{
        const {name,value} = e.target;
        setEmp({...emp,[name]:value});
    }
    const handleForm=(e)=>{
        e.preventDefault();
        setList([...list,{...emp,id:Date.now()}]);
        
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form method="post" onSubmit={handleForm}>
                            <div className="mb-3">
                                <label htmlFor="ename" className="form-label">Employee Name</label>
                                <input type="name" name='ename'  onChange={handleInput} className="form-control" id="ename" aria-describedby="ename" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="esalary" className="form-label">Employee Salary</label>
                                <input type="number" name='esalary' onChange={handleInput} className="form-control" id="esalary"/>
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list.length != 0 ?
                                list.map((employee,index)=>(
                                    <tr key={employee.id}>
                                        <td>{index+1}</td>
                                        <td>{employee.ename}</td>
                                        <td>{employee.esalary}</td>
                                        <td><button className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                ))
                                : <tr><td colSpan={4}>No data available</td></tr>}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Form
