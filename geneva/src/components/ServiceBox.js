import React from 'react';
//import from the constants file instead of being sloppy like this 
import json from '../assets/json.png'
export const services = [
    {
        id: "personalization1",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lo insert some bullshit here lol lol",
    },
    {
        id: "personalization2",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some lo here lol lol",
    },
    {
        id: "personalization3",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshitinsert somere lol lo here lol lol",
    },
    {
        id: "personalization4",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lol",
    },
    {
        id: "personalization5",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert sominsert some bullshit here lol loe bullshit here lol lol",
    },
    {
        id: "personalization6",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lol",
    },
]

const ServiceBox = props => {
    return (
        <div class = "m-auto max-w-7xl">
            <h1 class = "text-center text-4xl font-extrabold"> Services Provided for You </h1>
            <div class = "h-10 "> </div>
            <div class="grid col-auto sm:grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-x-10 gap-y-5 mx-24">
                {services.map((service) => (
                    <div class="flex flex-col justify-between grid-item bg-serviceBoxBackground p-5 rounded-lg w-60 h-60">
                        <img src={json} class="w-10 h-10" />
                        <h1 class = "text-center font-bold text-lg"> {service.title}  </h1>
                        <h1 class = "text-center mb-10"> {service.description} </h1>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ServiceBox;