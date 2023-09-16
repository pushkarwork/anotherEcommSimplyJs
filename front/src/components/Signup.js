import React, { useState } from 'react'

const Signup = () => {
    const [register, setregister] = useState({ name: "", email: "", password: "", number: "", address: "", answer: "" })

    const onChange = (e) => {
        setregister({ ...register, [e.target.name]: [e.target.value] })
    }
    
    return (
        <div>
            <form style={{ "width": "75vw", "border": "1px solid red", "margin": "auto" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={register.name} onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" id="email" value={register.email} onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={register.password} onChange={onChange} id="password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="number" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="number" name="number" value={register.number} onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address" value={register.address} onChange={onChange} aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="answer" className="form-label">Secret Answer</label>
                    <input type="text" className="form-control" id="answer" name="answer" value={register.answer} onChange={onChange} aria-describedby="emailHelp" />

                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}

export default Signup
