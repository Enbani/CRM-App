const axios = require('axios');

// const createContact = (data) => {
//     axios.post('http://localhost:3000/coverage', data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// };

// const body = {
//     position: 'COO',
//     name: "Mr. COO",
//     coverageStart: "2015",
//     mpid: "ABLE-US"
// };

// createContact(body);

// const getCoverageContacts = () => {
//     axios.get('http://localhost:3000/coverage?mpid=ABLE-US')
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// };

// getCoverageContacts();


// const newContact = {
//     position: 'Managing Director',
//     name: 'Tim Smith',
//     email: 'Tim.smith@example.com',
//     phone: '676-555-8423',
//     mobile: '212-987-3222',
//     location: '439 Madison Ave, Fl 22, New York, NY 10031',
//     twitterHandle: '@TimSmithOnTwitter',
//     interests: 'Baseball',
//     managerName: 'Rudy Stone',
//     managerTitle: 'CEO',
//     fidessaAdvocate: true,
//     mpid: 'RHCO-US',
//     comments: 'John Smith vigorously supports the organization and is a true partner.'
// };

// const addClientDetails = (data) => {
//     axios.post(`http://localhost:3000/clients`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// }

// addClientDetails(newContact);

const getClients = (mpid) => {
    axios.get(`http://localhost:3000/clients?mpid=${mpid}`)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
}

getClients('RHCO-US');

// const updateAClient = (id, data) => {
//     axios.patch(`http://localhost:3000/clients/${id}`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// }

// const body = {
//     name: 'Don Smith',
//     email: 'don.smith@example.com',
//     twitterHandle: '@donsmithisaboss'
// }

// updateAClient('5b19980743018c385c096387', body);

const deleteContact = (id) => {
    axios.delete(`http://localhost:3000/clients/${id}`)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
}

deleteContact('5b19980743018c385c096387');