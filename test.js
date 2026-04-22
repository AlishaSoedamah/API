// const CLIENT_ID = import.meta.env.CLIENT_ID;
// const CLIENT_SECRET = import.meta.env.CLIENT_SECRET;

// const response = await fetch(
//   'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token',
//   {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: new URLSearchParams({
//       grant_type: 'client_credentials',
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//     }),
//   }
// );

// const data = await response.json();
// const access_token = data.access_token;

// const url = "https://opensky-network.org/api/states/all?lamin=45.8389&lomin=5.9962&lamax=47.8229&lomax=10.5226";
// const response2 = await fetch(url, {
// 	headers: {
// 		Authorization: `Bearer ${access_token}`
// 	}
// });
// const flightInfo = await response2.json();
// console.log(flightInfo);