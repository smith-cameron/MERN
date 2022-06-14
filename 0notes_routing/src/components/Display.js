import React from "react";

const Display = (props) => {
    
    const {studentList, setStudentList} = props;

    const deleteById = (idInput)=> {
        setStudentList(studentList.filter((student, index)=> student.id !== idInput))

    };

    return(
      <div className="displayGroup">
        {
          studentList.map((student, index) =>(
            <div 
            key={index} 
            style={{ 
                textAlign: 'center' , 
                border: 'thin solid black',
                padding:'10px',
                margin: '5px 0'}}>
                <h3 >Your Form Data</h3>
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
                <button onClick={()=> deleteById(student.id)}
                >Delete</button>
            </div>
            )
          )
        }
      </div>
    )
}
export default Display