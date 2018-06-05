const axios = require('axios');

const createContact = (data) => {
    axios.post('http://localhost:3000/coverage', data)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
};

const body = {
    position: 'COO',
    name: "Mr. COO",
    coverageStart: "2015",
    mpid: "ABLE-US"
};

createContact(body);

const getCoverageContacts = () => {
    axios.get('http://localhost:3000/coverage?mpid=ABLE-US')
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
};

getCoverageContacts();

