import React from 'react';
//import from the constants file instead of being sloppy like this 

export const services = [
    {
        id: "personalization1",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lol",
    },
    {
        id: "personalization2",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lol",
    },
    {
        id: "personalization3",
        icon: 'json.png',
        title: "Personalization APIs",
        description: "insert some bullshit here lol lol",
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
        description: "insert some bullshit here lol lol",
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
        <div>
            <h1 class = "text-center text-3xl"> Services Provided for you </h1>
            {/* add some margin in between the text and grid*/}
            <div class="grid grid-cols-3 grid-rows-2 gap-4">
                {services.map((service) => (
                    <div class="grid-item col-auto bg-serviceBoxBackground p-5">
                        <h1> {service.icon} </h1>
                        <h1> {service.title} </h1>
                        <h1> {service.description} </h1>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ServiceBox;