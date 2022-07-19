import React, { useState } from 'react';

export default function TextForm(props) {

	const [text, setText] = useState('Enter Text here');

	const handleUpClick = () => {
		console.log('Upper case clicked');
		setText(text.toUpperCase());
		props.showAlert("Converted to upper case","success")
	};

  const handleLowerClick = () => {
		console.log('Upper case clicked');
		setText(text.toLowerCase());
		props.showAlert("Converted to lower case","success")
	};

	const handleOnChange = event => {
		console.log('On Change invoked');
		setText(event.target.value);
	};
	return (
    <>
		<div className="container">
			<h1 htmlFor="exampleFormControlTextarea1" className="form-title">
				{props.heading}
			</h1>
			<textarea
				className="form-control"
				id="exampleFormControlTextarea1"
				onChange={handleOnChange}
				rows="9"
				value={text}
			/>
			<button className="btn btn-primary my-3" onClick={handleUpClick}>
				Convert to Uppercase
			</button>

      <button className="btn btn-primary my-3 mx-4" onClick={handleLowerClick}>
				Convert to Lowercase
	    </button>
		</div>

    	<div className="container my-3">
        <h1>Your text Summary</h1>
        <p>Words : {text.split(" ").length}, Chars: {text.length}</p>
        <p>Time taken to read by user: {text.split(" ").length * 0.008} minutes</p>
        <p>Preview: {text}</p>
      </div>
    </>
	);
}
