import React, { Component } from 'react';
import './index.css'


class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName : '',
            lastName  : '',
            school   : '',
            course : 'frontend'
        }

        this.firstNameInput = this.firstNameInput.bind(this)
        this.lastNameChange = this.lastNameChange.bind(this)
        this.schoolChange = this.schoolChange.bind(this)
        this.coursePicked = this.coursePicked.bind(this)
    }
    

    firstNameInput(event) {
        this.setState({
            firstName : event.target.value
        })
    }


    lastNameChange(event) {
        this.setState({
            lastName : event.target.value
        })
    }


    schoolChange(event){
        this.setState({
            school : event.target.value
                })
    }
    
    coursePicked(event) {
        this.setState({
            course : event.target.value
        })
    }



    render() { 
        return ( 
            <div>
                <form action="">
                    <h1>Fill the form</h1>
                    <div>
                        <input type="text" placeholder='First Name' 
                        value={this.state.firstName} 
                        onChange={this.firstNameInput} />
                    </div>

                    <div>
                        <input type="text" placeholder='Last Name' 
                        value={this.state.lastName}
                        onChange={this.lastNameChange} />
                    </div>


                    <div>
                        <input type="text" placeholder='School' 
                        value={this.state.school} 
                        onChange={this.schoolChange} />
                    </div>

                    <div>
                        <label htmlFor="">Course</label>
                        <select name="" id=""  value={this.state.course}  onChange={this.coursePicked}   >
                        <option value="Frontend development">Frontend development</option>
                        <option value="Backend development">Backend development</option>
                        <option value="Mobile development">Mobile development</option>
                        </select>
                      
                    </div>
                </form>
                <div className="certify">
                    <h1 className="head">Certificate of Completion</h1>
                     <h3 className="headTag">This is to certify that </h3> 
                     <h2 className="firstName">{this.state.firstName}   {this.state.lastName}</h2>
                     <h3 className="headTag">has completed the course of</h3>
                      <h2 className="firstName">{this.state.course}</h2>
                     <h3 className="headTag">at</h3>
                     <h2 className="firstName">{this.state.school}</h2>
                     <button>Print</button>
                </div>
                 

            </div>
         );
    }
}
 
export default Form;