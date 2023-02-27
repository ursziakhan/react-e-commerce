import React from 'react';

const users = [
  {
    name: 'khan',
    email: 'khan@gmail.com',
    address: [
      { hm: '101', city: 'umeå', country: 'Sweden' },
      { hm: '10', city: 'luleå', country: 'pakistan' },
      { hm: '23', city: 'Peshawar', country: 'norway' },
      { hm: '45', city: 'Pakistan', country: 'pakistan' },
    ],
  },
  {
    name: 'charlie',
    email: 'bruce@789.com',
    address: [
      { hm: '101', city: 'Noida', country: 'SWe' },
      { hm: '10', city: 'Gurgaon', country: 'Nor' },
      { hm: '23', city: 'Noida', country: 'SA' },
      { hm: '45', city: 'Delhi', country: 'Du' },
    ],
  },
  {
    name: 'Peter',
    email: 'peter@yahoo.com',
    address: [
      { hm: '101', city: 'karachi', country: 'PAk' },
      { hm: '10', city: 'umeå', country: 'SWe' },
      { hm: '23', city: 'lahore', country: 'SA' },
      { hm: '45', city: 'peshawar', country: 'PAK' },
    ],
  },
  {
    name: 'Sami',
    email: 'sam@456.com',
    address: [
      { hm: '101', city: 'lahore', country: 'PAK' },
      { hm: '10', city: 'umeå', country: 'SWe' },
      { hm: '23', city: 'oslow', country: 'Nor' },
      { hm: '45', city: 'abc', country: 'Du' },
    ],
  },
];

function About() {
  return (
    <div className="ml-10">
      <table>
        <tbody>
          <tr className="bg-yellow-200">
            <td className="ml-10">Name</td>
            <td className="ml-10">Email</td>
            <td className="mr-10">Address</td>
          </tr>
        </tbody>
        {users.map((data) => (
          <tr>
            <td className="ml-10 bg-yellow-200">{data.name}</td>
            <td className="ml-10 bg-yellow-200">{data.email}</td>
            <td>
              {data.address.map((itmes, index) =>
                itmes.hm === '101' ? (
                  <tr key={index}>
                    {index}
                    <td>{itmes.hm}</td>
                    <td>{itmes.city}</td>
                    <td>{itmes.country}</td>
                  </tr>
                ) : null
              )}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default About;
