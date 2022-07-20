// 1 - Hello World

// const helloWorld = () => {
//     return new Promise((resolve, reject) => {
//         const sentence = "Hello World"

//         setTimeout(() => {
//             resolve(sentence)
//         }, 2000)
//     })
// }

// const sayHello = async() => {
//     const result = await helloWorld()
//     console.log(result)
    
// }
// sayHello()


// 2 - Il fait froid

// if(temperature <= 10) {
//     console.log("il fait froid")
// }else {
//     console.log("il fait chaud")
// }

// const sayTemp = () => {
//     return new Promise((resolve, reject) => {
//         const temperature = 15
        
//         setTimeout(() => {
//             if(temperature <= 10) {
//                 resolve("il fait froid")
//             }else {
//                 reject("il fait chaud")
//             }
//         }, 4000)
//     })
// }

// const awaitTemp = async() => {
//     try {
//         const result = await sayTemp()
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }
// awaitTemp()


// 3 - Ménage

const debLessive = "Je commence la lessive"
const endLessive = "j’ai fini la lessive"
const debVaisselle = "Je commence à faire la vaisselle"
const endVaisselle = "j’ai fini la vaisselle"
const endMenage = "J'ai fini de faire le ménage"

const lessive = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(endLessive)
        }, 3000)
    })
}

const vaisselle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(endVaisselle)
        },1500)
    })
}

const menage = async() => {
    console.log(debLessive)
    
    const result = await lessive()
    console.log(result)
    
    console.log(debVaisselle)
    const result2 = await vaisselle()
    console.log(result2)

    console.log(endMenage)
}
menage()