import React from 'react';
import UserData from './UserData'; // Import your local data
import './UserTable.css'; // Import your CSS

function UserTable() {
  const { users } = UserData;

  return (
    <div>
      <h2>User Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Image</th>
            <th>Blood Group</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Eye Color</th>
            <th>Hair Color</th>
            <th>Hair Type</th>
            <th>Domain</th>
            <th>IP</th>
            <th>Address</th>
            <th>City</th>
            <th>Coordinates (Lat)</th>
            <th>Coordinates (Lng)</th>
            <th>Postal Code</th>
            <th>State</th>
            <th>MAC Address</th>
            <th>University</th>
            <th>Card Expiry Date</th>
            <th>Card Number</th>
            <th>Card Type</th>
            <th>Currency</th>
            <th>IBAN</th>
            <th>Company Department</th>
            <th>Company Name</th>
            <th>Company Title</th>
            <th>EIN</th>
            <th>SSN</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td><img src={user.image} alt={`Image for ${user.firstName} ${user.lastName}`} /></td>
              <td>{user.bloodGroup}</td>
              <td>{user.height}</td>
              <td>{user.weight}</td>
              <td>{user.eyeColor}</td>
              <td>{user.hair.color}</td>
              <td>{user.hair.type}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.address.address}</td>
              <td>{user.address.city}</td>
              <td>{user.address.coordinates.lat}</td>
              <td>{user.address.coordinates.lng}</td>
              <td>{user.address.postalCode}</td>
              <td>{user.address.state}</td>
              <td>{user.macAddress}</td>
              <td>{user.university}</td>
              <td>{user.bank.cardExpire}</td>
              <td>{user.bank.cardNumber}</td>
              <td>{user.bank.cardType}</td>
              <td>{user.bank.currency}</td>
              <td>{user.bank.iban}</td>
              <td>{user.company.department}</td>
              <td>{user.company.name}</td>
              <td>{user.company.title}</td>
              <td>{user.ein}</td>
              <td>{user.ssn}</td>
              <td>{user.userAgent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
