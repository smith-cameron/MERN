import React from "react";

const Display = (props) => {
    
    const {studentList} = props;

    return(
        <div className="displayGroup">
            {
                studentList.map((student, index) =>(
                    <div key={index}>
                        <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                        <p>
                            <label>First Name: </label>{ student.firstName }
                        </p>
                        <p>
                            <label>Last Name: </label>{ student.lastName }
                        </p>
                        <p>
                            <label>Email: </label>{ student.email }
                        </p>
                        <p>
                            <label>Password: </label>{ student.password }
                        </p>
                    </div>
                    )
                )
            }
        </div>
    )
}
export default Display