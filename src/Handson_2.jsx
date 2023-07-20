import { Component } from "react";
import "./App.css"
class Handson_2 extends Component {
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
        return(
            <div className="App">
                <div className="form">
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                    <form>
                        <label>Name : </label>
                        <input type="text" name="name" onChange={this.handleChange} placeholder="Enter Your Name" value={this.state.name} />
                        <br/>
                        <br/>
                        <label>Department : </label>
                        <input type="text" name="department" onChange={this.handleChange} placeholder="Enter Your Department" value={this.state.department} />
                        <br/>
                        <br/>
                        <label htmlFor="">Rating : </label>
                        <input type="number" name="rating"onChange={this.handleChange} placeholder="Enter Rating " value={this.state.rating} />
                        <br/>
                        <br/>
                        <button type="button" onClick={this.handleClick}>Submit</button>                   
                         </form>
                </div>
                <div className="DataContainer" >
                    <div className="Data">
                    {this.state.data.map((item ,index) => {
                            return (
                                <div className="display" key={index}>
                                    <h3>Name: {item.name} | Department: {item.department} | Rating: {item.rating}</h3>
                                </div>

                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
export default Handson_2;