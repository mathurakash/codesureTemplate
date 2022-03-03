import React, { useState } from "react";

const Contact = () => {

    const [form,setForm]=useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    });

    const InputEvent=(event)=>{
        const {name,value}=event.target;
        setForm((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const formSubmit =(e)=>{
        e.preventDefault();
        alert( `My Name is  ${form.name} . My mobile is  ${form.phone} . My email id is  ${form.email} . My message is ${form.message}`);
        
    }

    return (
        <>
            <div className="m-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row ">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" class="form-control" name="name" value={form.name} onChange={InputEvent}  id="exampleFormControlInput1" placeholder="Enter your Name" />
                                <label for="exampleFormControlInput1">Email </label>
                                <input type="email" class="form-control" name="email" value={form.email} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Email" />
                                <label for="exampleFormControlInput1">Contact</label>
                                <input type="text" class="form-control" name="phone" value={form.phone} onChange={InputEvent} id="exampleFormControlInput1" placeholder="Enter Your Contact" />
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea class="form-control" name="message" value={form.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div class="col-auto">
      <button type="submit" class="btn btn-outline-primary my-2">Submit</button>
    </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;