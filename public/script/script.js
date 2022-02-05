const { dreams } = require("../../controllers")

dreams.forEach(dream => { 

dream.dream

})

dreams.forEach(dream => {
    let randomNumber = Math.floor(Math.random() * (dreams.length))
    dream.dream[randomNumber]
})


function dreamPicker() { 
    let randomNumber = Math.floor(Math.random() * (dreams.length));
    dreams[randomNumber]._id
    dreams[randomNumber].dream
}