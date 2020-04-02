import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const toBeTestedFunctionOnRequest = functions.https.onRequest(async (req, resp) => {
    let test = 'I did not await';
    await (new Promise((res) => setTimeout(() => {test = 'I did await'; res()}, 5000)));
    resp.send(test);
});

export const toBeTestedFunctionOnCall = functions.https.onCall(async (data, context) => {
    let test = 'I did not await';
    await (new Promise((res) => setTimeout(() => {test = 'I did await'; res()}, 5000)));
    data.send(test)
});