// const hi = (callBack) =>{
//     setTimeout(() => {
//         console.log("Hi")
//     },3000)
//     callBack()
// }

// const bye = () => {
//     console.log("Bye")
// }

// hi(bye);
// // console.log(window)
// // console.log(document)
setTimeout(
    () =>{
        document.getElementById("count").innerHTML=3
        setTimeout(() => {
            document.getElementById("count").innerHTML=2
            setTimeout(() =>{
                document.getElementById("count").innerHTML=1
                setTimeout(() =>{
                    document.getElementById("count").innerHTML="Happy New Year"
                    console.log("Happy New Year")
                },1000)
            },1000)
        },1000)
    },1000
)


// const sample = async () => {

//     let result =  await fetch("https://restcountries.com/v3.1/all")
//     .then(response => response.json())
//     console.log(result)

//     document.getElementById("root").innerHTML = `
//     <h1>${result[0].name.common}<h1>
//     <img src="${result[0].flags.png}"/>
//     `
    
// }

// sample()