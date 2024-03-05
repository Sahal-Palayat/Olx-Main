import { createContext, useContext, useEffect, useState } from "react";
import { addDocument, isUserExist, onAuthChangeFunction } from './firebaseFunctions';


export const FirebaseContext = createContext();

export const FirebaseProvider = ({ children }) => {

  const [userData, setUserData] = useState(null);

  const userGlobal = (data) => {
    console.log(data);
    setUserData(data);
  }

  useEffect(() => {
    onAuthChangeFunction(setUserData)
  }, [])

  return (
    <FirebaseContext.Provider value={{ addDocument, isUserExist, userGlobal, userData, setUserData }}>
      {children}
    </FirebaseContext.Provider>
  );
};


