import React from 'react'

class Counter extends React.Component{


    constructor(props) {
        super()
        this.state = {
            nilai1: 0,
            nilai2:0,
            operator:null,
            hasil:null
}
}

counter(e){
e.preventDefault();
const nilai1=parseInt(this.refs.nilai1.value);
const nilai2=parseInt(this.refs.nilai2.value);
const operator=this.refs.operator.value;

var hasil;
switch (operator) {
    case '+':
    hasil=nilai1+nilai2;
    break;
    case '-':
    hasil=nilai1-nilai2;
    break;
    case '*':
    hasil=nilai1*nilai2;
    break;
    case '/':
    hasil=nilai1/nilai2;
    break;
 
}
this.setState({nilai1,nilai2,operator,hasil});

    this.refs.nilai1.value=null;
    this.refs.nilai2.value=null;
    
}

jumlahhasil(){
    const {nilai1,nilai2,operator,hasil}=this.state;
    if (this.state.hasil){
        return (
            <div>
                <br/>
                <p className="alert alert-success">
                    {nilai1+operator+nilai2+'='+hasil}
                    </p>
                    </div>
        );
    }
}

    render (){
        return (
            <div>
                <form>
                    <label>Input Value1:</label>
                    <input type="number" ref="nilai1" className="form-control"/>
                    <br/>
                    <br/>
                    <label>Input Value2:</label>
                    <input type="number" ref="nilai2" className="form-control"/>
                    <br/>
                    <br/>
                    <label> Operator:</label>
                    <select ref="operator" className="form-control">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <br/>
                    <br/>
                    <button className="btn btn-primary">Result</button>       
                </form>
                {/*hasil*/}
                {this.jumlahhasil()}
                {/*hasil*/}

            </div>
        );
    }
}
export default Counter;