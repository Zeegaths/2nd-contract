import React from 'react'
import { useState } from "react";
import { ethers } from "ethers";
import contractABI from "./abi.json";
import './file.css'


const Resgistry = ({contractAddress}) => {

    async function requestAccount() {
        await window.ethereum.request({ method: "eth_requestAccounts" });
    }


    // Function to get the name input
    const [inputName, setInputName] = useState(""); // Renamed state variable-name (inputName, setInputName)
    const [getname, setGetname] = useState(); //getname, setGetname

    async function sendNameToContract() {       //sendNameToContract
        // Renamed function
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );

            try {
                const transaction = await contract.updateName(inputName); //updateName(inputName)
                await transaction.wait();
                console.log("Name set sucessifully"); //Name set sucessifully
                setInputName(" ");  //setInputName
            } catch (err) {
                console.error("Error:", err);
            }
        }
    }


    // Function to get the age input

    const [inputAge, setInputAge] = useState(""); // Renamed state variable-name (inputAge, setInputAge)
    const [getAge, setGetAge] = useState(""); //getAge, setGetAge

    async function sendAgeToContract() {       //sendAgeToContract
        // Renamed function
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );

            try {
                const transaction = await contract.updateAge(inputAge); //updateAge(inputAge)
                await transaction.wait();
                console.log("Age set sucessfully"); //Age set sucessfully
                setInputAge(" ");  //setInputAge
            } catch (err) {
                console.error("Error:", err);
            }
        }
    }


    //function to get name and age
    async function updateNameAge() {                         //updateNameAge
        // Renamed function
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract(
                contractAddress,
                contractABI,
                signer
            );

            try {
                const transactionName = await contract.getEntityDetails();
                console.log(transactionName);
                // getEntityDetails()
                const transactionAge = await contract.getEntityDetails();
                setGetname(transactionName.toString().split(",")[0]);                             //setGetname
                setGetAge(transactionAge.toString().split(",")[1]);
                console.log(transactionName, transactionAge);
            } catch (err) {
                console.error("Error:", err);
            }
        }
    }

    const handleNameChange = (e) => {
        setInputName(e.target.value);        //setInputName
    };
    const handleAgeChange = (e) => {
        setInputAge(e.target.value);        //setInputAge
    };

    return (
        <div className="main-container">
            <div className="Input">
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={inputName}            //inputName
                    onChange={handleNameChange}
                />

                <input
                    type="text"
                    placeholder="Enter your age"
                    value={inputAge}            //inputName
                    onChange={handleAgeChange}
                />
                <button className="NameButton" onClick={sendNameToContract}>Set Name</button>
                <button className="AgeButton" onClick={sendAgeToContract}>Set Age</button>
                <button className="SetButton" onClick={updateNameAge}>Get</button>
            </div>
            <div className='output'>
                <p>{getname}</p>
                <p>{getAge}</p>
            </div>

        </div>
    )
}

export default Resgistry
