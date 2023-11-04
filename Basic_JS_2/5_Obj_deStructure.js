const obj = {
    courseName : "web-d",
    coursePlatform : "youtube",
    coursePlaylist : "chai aur code"
}

// de structuring

const {courseName : name , coursePlatform :platform , coursePlaylist : playlist} = obj

console.log(name);
console.log(platform);
console.log(playlist);


//api recieve in json file which looks like , earlier api was recieved as xml
// {
//     "courseName" : "web-d",
//     "coursePlatform" : "youtube",
//     "coursePlaylist" : "chai aur code"
// }

// api recieve in form of arrays
/*
[   {},
    {},
    {}
]                      */