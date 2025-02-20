import { createStore } from "redux";
import { addProfile, removeProfile } from "./actions";



const profileIdHTML = document.querySelector("#profileId")
const nameHTML = document.querySelector("#name")
const ageHTML = document.querySelector("#age")
const addProfileBtn = document.querySelector("#addProfileBtn")
const removeProfileIdHTML = document.querySelector("#removeProfileId")
const removeProfileBtn = document.querySelector("#removeProfileBtn")
const profilesListHTML = document.querySelector("#profilesList")
const averageAgeHTML = document.querySelector("#averageAge")

const profiles = [  
    { id: 1, name: "Alice", age: 25 },  
    { id: 2, name: "Bob", age: 30 },  
    { id: 3, name: "Charlie", age: 35 }
]

const renderProfiles = (profilesList) => {
    profilesListHTML.innerHTML = profilesList.map(profile => 
        `<li>${profile.id}. ${profile.name} (${profile.age} years old)</li>`
    ).join("")
}

window.addProfileHandler = () => {
    const profileObj = {
        id: profileIdHTML.value,
        name: nameHTML.value,
        age: ageHTML.value
    }
    console.log(profileObj)
}

renderProfiles(profiles)