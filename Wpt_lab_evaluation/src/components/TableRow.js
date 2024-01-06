import React from 'react'

function TableRow(props) {
console.log(props);
const {FirstName,lastName,address,pincode} = props;
console.log("AFter" ,FirstName,lastName,address,pincode);
  return (
    <tr>
       <td>{FirstName}</td>
       <td>{lastName}</td>
       <td>{address}</td>
       <td>{pincode}</td>
    </tr>
  );
}

export default TableRow;