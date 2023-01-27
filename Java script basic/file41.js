// object desteucturing

const band={
    bandName:"Linkink park",
    famousSong:"numb",
    year:1984,
    anotherfamousSong:"in the end"
};

// const bandName=band.bandName 
// const famousSong=band.famousSong

let {bandName,famousSong, ...restprops}=band

console.log(bandName)
console.log(restprops)


