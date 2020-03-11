// let arr = ['Fedor', 'Alice', 'Martin'];
// for (name of arr){
//     console.log(name); --> result --> List of all names (Fedor, Alice, Martin)
// }


const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Sports', 30, 'sport-center'],
    ['Hillert Secondary', 60, 'school'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
];

// In order for a station to be deemed appropriate, it must have a capacity of at least 20, and be a school or community centre.

function chooseStations() {
    let goodStations = [];

    for (let data of stations) {
        let value = data[1];
        if (value > 20) {
            let place = data[2];
            if (place === 'school' || place === 'community centre') {
                goodStations.push(data[0]);
            }
        }
    }
    return goodStations;
}

console.log(chooseStations());