import { createStore } from "redux";
import { addProfile, calculateAverageAge, removeProfile } from "./actions";
import profileReducer from "./profileReducer";

const store = createStore(profileReducer)

const renderProfiles = (profilesList) => {
    profilesListHTML.innerHTML = profilesList.map(profile => {        
        return `<li>${profile.id}. ${profile.name} (${profile.age} years old)</li>`
    }
    ).join("")    
}

const updateProfile = () => {
    const state = store.getState()
    renderProfiles(state.profiles)
    averageAgeHTML.textContent = `Average Age: ${state.averageAge.toFixed(2)}`
}

store.subscribe(() => {
    updateProfile()
})

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

profiles.forEach(profile => {
    store.dispatch(addProfile(profile))
    store.dispatch(calculateAverageAge())
})

window.addProfileHandler = () => {
    const profileObj = {
        id: parseInt(profileIdHTML.value),
        name: nameHTML.value,
        age: parseInt(ageHTML.value)
    }
    store.dispatch(addProfile(profileObj))
    store.dispatch(calculateAverageAge())
}

window.removeProfileHandler = () => {
    store.dispatch(removeProfile(parseInt(removeProfileIdHTML.value)))
}