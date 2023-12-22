import "./App.css";

let Button = (props) => {
    const handleButtonClick = () => {
        alert("Trigger");
    };

    // let colorOfText;
    // if(props.textColor){
    //     colorOfText = props.textColor;
    // } else {
    //     colorOfText= "blue";
    // }
    let colorOfText = props.textColor ? props.textColor : "blue";
    return (
        <button onClick={handleButtonClick} style={{ color: colorOfText, margin: "10px", padding: "5px" }}>
            {props.text}
        </button>
    );
};

function App() {
    return (
        <div className="App">
            <Button textColor="red" text="Click me" />
            <Button textColor="green" text="Submit" />
            <Button text="Learn More" />
            <Button text="Button 1" />
            <Button text="Button 2" />
        </div>
    );
}

export default App;
