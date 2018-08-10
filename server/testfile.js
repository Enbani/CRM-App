var axios = require('axios');

var createContact = (data) => {
axios.post('http://localhost:8080/coverage', data)
.then((res) => console.log(res.data))
.catch((e) => console.log(e))
};

var body = {
position: "DM",
name: "Vinny",
coverageStart: "10/03/2013",
coverageEnd: "04/06/2017",
mpid: "MNOP-US",
active: false,
};

var body2 = {
position: "DM",
name: "Enbani",
coverageStart: "04/06/2017",
coverageEnd: "08/10/2018",
mpid: "MNOP-US",
active: true,
};

createContact(body);
createContact(body2);

var newContact = {
position: 'Trade Associate',
name: 'Peter Parker',
email: 'peterparker@web.com',
phone: '676-555-8423',
mobile: '212-987-3222',
location: '439 Madison Ave, Fl 22, New York, NY 10031',
twitterHandle: '@web',
interests: 'Web',
managerName: 'Uncle Ben',
managerTitle: 'Uncle',
advocate: 'Yes',
mpid: 'MNOP-US',
comment:'Spider Man.'
};

var addClientDetails = (data) => {
axios.post(`http://localhost:8080/clients`, data)
.then((res) => console.log(res.data))
.catch((e) => console.log(e))
}

addClientDetails(newContact);

var bio = {
mpid: 'MNOP-US',
mpidDescription: 'MNOP Bank',
address: '4567 Main Street, Virginia, VA 56210',
clientBio: 'MNOP is a bank',
service: 'Hosted',
serviceLine: 'Derivatives',
region: 'US',
clientClass: 'A',
platform: 'USTP',
activeDate: '1/2/2018',
status: 'Active'
}

var addClientBios = (data) => {
axios.post(`http://localhost:8080/bios`, data)
.then((res) => console.log(res.data))
.catch((e) => console.log(e))
};

addClientBios(bio); 

var source = {
clientMnemonic: 'MNOP-US',
clientName: 'MNOP',
service: 'Hosted',
serviceLine: 'Derivatives',
dm: 'Luke Skywalker',
ldm: 'Obi Wan',
cdm: 'Yoda',
subRegion: 'US',
regionOwningRelationship: 'AMER',
tier: 'Tier 2',
clientClass: 'Class A',
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
qvm: 'MNOP'
}

var addGoldenSourceInfo = (data) => {
axios.post(`http://localhost:8080/source/`, data)
.then((res) => console.log(res.data))
.catch((e) => console.log(e));
};

addGoldenSourceInfo(source);


// // var flow = {
// //     flowType: 'Fixed Income',
// //     supported: false,
// //     adjacent: false,
// //     systems: ['System X', 'System Y'], 
// // };

// // var addFlowInfo = (flow) => {
// //     axios.post(`http://localhost:8080/flow/`, flow)
// //     .then((res)=> console.log(res))
// //     .catch((e) => console.log(e));
// // };

// // addFlowInfo(flow);
// // var data = {
// //     id: '5b6c6cd51b4fa642a40bde20'
// // }
// // var deleteFlows = (mpid, data) => {
// //     axios.patch(`http://localhost:8080/bios/${mpid}/delete-flow`, data)
// //     .then((res)=> console.log(res.data))
// //     .catch((e)=> console.log(e));
// // };

// // deleteFlows('MNOP-US', data)