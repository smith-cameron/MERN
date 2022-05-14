import React, { useState } from "react";

const PersonCard = (props) => {
    const {firstName, lastName, age, hair} = props;
    const [birthdayAge, setBirthdayAge] = useState(props.age);

    return (
        <div className="container">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {birthdayAge}</p>
            <p>Hair Color: {hair}</p>
            <button onClick = { () => setBirthdayAge( birthdayAge + 1 )}>
            Birthday Button for {firstName} {lastName}
            </button>
        </div>
    );
}
export default PersonCard;