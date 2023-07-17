import { Component } from "react";

class HandsonSecond extends Component {
    state = {
        name: "",
        department: "",
        rating: "",
        data: []
    }

    handleChange = (event) => {
        
        this.setState({ [event.target.name]: event.target.value })
    }
    handleClick = () => {
        const obj = {
            name: this.state.name,
            department: this.state.department,
            rating: this.state.rating
        }
        this.state.data.push(obj);
        this.setState({ data: this.state.data, name: "", rating: "", department: "" })
    }
    render() {
        const newLocal = "displaymain";
        return (
            <form >
                <div className="main">
                    <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <div className="row">

                        <label>

                            Name : <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Your Name" value={this.state.name} />
                        </label>
                    </div>
                    <div className="row">
                        <label >
                            Department : <input type="text" name="department" onChange={this.handleChange} placeholder="Enter Your Department" value={this.state.department} />
                        </label>
                    </div>
                    <div className="row">
                        <label>
                            Rating : <input type="number" name="rating" onChange={this.handleChange} placeholder="Enter Rating " value={this.state.rating} />
                        </label>
                    </div>
                    <button type="button" onClick={this.handleClick}>Submit</button>
                    <div className={newLocal}>
                        {this.state.data.map((item) => {
                            return (
                                <div className="display">
                                    <h3>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h3>
                                </div>

                            )
                        }
                        )}
                    </div>
                </div>
            </form>
        )
    }
}

export default HandsonSecond