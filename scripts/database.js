const db = {
    fish: [
        {
            id: 1,
            image: 'https://xray-mag.com/sites/default/files/2020-12/Spiny%20dogfish%20052.jpg',
            name: "Bart",
            food: "Crustaceans",
            size: "3.3 feet",
            species: "Spiny Dogfish",
            location: "North America"
        },

        {
            id: 2,
            image: 'https://th.bing.com/th/id/OIP.TfsfIWzd0DK1RM5_tJLRRgHaE8?pid=ImgDet&rs=1',
            name: "Artie",
            food: "Shrimp, seaweed",
            size: "1.2 inches",
            species: "Silvertip Tetra",
            location: "South America"
        },

        {
            id: 3,
            image: 'https://www.fishlaboratory.com/wp-content/uploads/2021/05/oscar-fish-1536x1024.jpg?ezimgfmt=ng:webp/ngcb1',
            name: "Ozzy",
            food: "Small fish",
            size: "12 inches",
            species: "Oscar Fish",
            location: "South America"
        },
    ]
}



export const getFish = () => {
    return db.fish.map(fish => ({...fish}))
}