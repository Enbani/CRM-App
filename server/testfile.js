const axios = require('axios');

// const createContact = (data) => {
//     axios.post('http://localhost:8080/coverage', data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// };

// const body = {
//     position: 'CFO',
//     name: "Mr. CFO",
//     coverageStart: "2013",
//     mpid: "HSBC-US"
// };

// createContact(body);

// const getCoverageContacts = () => {
//     axios.get('http://localhost:3000/coverage?mpid=HSBC-US')
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// };

// getCoverageContacts();


// const newContact = {
//     position: 'Managing Director',
//     name: 'Don Jones',
//     email: 'Don.Jones@example.com',
//     phone: '676-555-8423',
//     mobile: '212-987-3222',
//     location: '439 Madison Ave, Fl 22, New York, NY 10031',
//     twitterHandle: '@DonJonesOnTwitter',
//     interests: 'Baseball',
//     managerName: 'Rudy Stone',
//     managerTitle: 'CEO',
//     fidessaAdvocate: true,
//     mpid: 'HSBC-US',
//     comments: 'Don Jones vigorously supports the organization and is a true partner.'
// };

// const addClientDetails = (data) => {
//     axios.post(`http://localhost:8080/clients`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// }

// addClientDetails(newContact);

// const getClients = (mpid) => {
//     axios.get(`http://localhost:3000/clients?mpid=${mpid}`)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// }

// getClients('HSBC-US');

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

// const deleteContact = (id) => {
//     axios.delete(`http://localhost:3000/clients/${id}`)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// }

// deleteContact('5b19980743018c385c096387');

// var bio = {
//     mpid: 'ZASX-US',
//     mpidDescription: 'ZASX Asset Management',
//     address: '4567 Main Street, Virginia, VA 56210',
//     clientBio: 'placeholder text',
//     service: 'Hosted',
//     serviceLine: 'Equities',
//     region: 'US',
//     clientClass: 'A',
//     platform: 'USTP',
//     activeDate: '1/2/2018',
//     status: 'active'
// }

// const addClientBios = (data) => {
//      axios.post(`http://localhost:8080/bios`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e))
// };

// addClientBios(bio); 

// const getClientBios = (mpid) => {
//     axios.get(`http://localhost:8080/bios?mpid=${mpid}`)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// }

// getClientBios('HSBC-US');

// const updateClientInfo = (mpid, data) => {
//     axios.patch(`http://localhost:3000/bios/${mpid}`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// };

// updateClientInfo('RBCO-US', {serviceLine: 'Derivatives', platform: 'GTP'});

// const getRenderPageInfo = (mpid) => {
//     axios.get(`http://localhost:8080/pages/${mpid}`)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// }

// getRenderPageInfo('HSBC-US');

const source = {
    clientMnemonic: 'ZASX-US',
    clientName: 'ZASX',
    service: 'Hosted',
    serviceLine: 'Equities',
    dm: 'Mrs. DM',
    ldm: 'Mr. LDM',
    cdm: 'Ms. CDM',
    subRegion: 'US',
    regionOwningRelationship: 'AMER',
    tier: 'Tier 2',
    clientClass: 'Class B',
    servicePlatform: 'XTP',
    sdTl: 'Luigi Plumber',
    sdManager: 'Mario Plumber',
    sdTeam: 'Team B',
    goLiveDate: '3/1/2012',
    accountManager: 'Rockerfeller',
    noticeEmail: '3/1/2012',
    noticeGoLiveDate: '4/1/2012',
    decomDate: 'N/A',
    decommissioned: 'No',
    fidUnqiueClientId: 'FGHI',
    csTeam: 'Team A',
    csTl: 'Tron',
    qvm: 'ZASX'
}

// const addGoldenSourceInfo = (data) => {
//     axios.post(`http://localhost:8080/source/`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// };

// addGoldenSourceInfo(source);

// const getSourceInfo = (mpid) => {
//     axios.get(`http://localhost:8080/source/${mpid}`)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// };

// getSourceInfo('RBCO');

// const updateSourceInfo = (data, mpid) => {
//     axios.patch(`http://localhost:8080/source/${mpid}`, data)
//         .then((res) => console.log(res.data))
//         .catch((e) => console.log(e));
// };

// updateSourceInfo(source, 'HSBC-US');

const getIndex = () => {
    axios.get('http://localhost:8080/pages')
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e))
};

getIndex();