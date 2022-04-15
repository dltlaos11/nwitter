import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCwjEBRWww6kh-rXT9LPLFR1DHpNm5hrpU",
    authDomain: "conimal-47728.firebaseapp.com",
    projectId: "conimal-47728",
    storageBucket: "conimal-47728.appspot.com",
    messagingSenderId: "687583269450",
    appId: "1:687583269450:web:0a3671a8f637dffd638cb3"
  };

  const app = initializeApp(firebaseConfig);

export  const authentication = getAuth(app);