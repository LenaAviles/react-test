import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCaTMfFiE_AVLoMKKrFLaY_LTdxa6Towj8",
    authDomain: "concilium-e99eb.firebaseapp.com",
    databaseURL: "https://concilium-e99eb.firebaseio.com",
    projectId: "concilium-e99eb",
    storageBucket: "concilium-e99eb.appspot.com",
    messagingSenderId: "1008881624630"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseQuestions = firebaseDB.ref('Question');

const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseQuestions,
    firebaseLooper
}