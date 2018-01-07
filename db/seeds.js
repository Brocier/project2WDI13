require('dotenv').config()
//imports
const User = require('./models/User.js')
const Image = require('./models/Images.js')
const Pet = require('./models/Pets.js')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// connect to database - taken from regifter-app
mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
})

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}`)
    process.exit(-1)
})

//Wipe everything and add my seeds
User.remove({})
    .then(() => {
        const josh = new User({
            username: 'jschoe04',
            password: '12345', //thank you Spaceballs
            firstname: 'Joshua',
            //fill this out more later
        })

        const tiberius = new Pet({
            name: 'Tiberius',
            age: 2,
        })
        const cuteCat = new Image({
            description: 'Laying on the couch',
            imageUrl: 'https://i.imgur.com/v47JqKm.jpg'
        })

        tiberius.images.push(cuteCat)

        const murdock = new Pet({
            name: 'Murdock',
            age: 9,
        })
        const handsomeBoy = new Image({
            description: 'What a doggo',
            imageUrl: 'https://i.imgur.com/bFFkBgF.jpg'
        })
        murdock.images.push(handsomeBoy)

        josh.pets.push(murdock, tiberius)

        return josh.save()
    }).catch((error) => {
        console.log('SEED NO WORKING')
        console.log(error)
    }).then(() => {
        mongoose.connection.close()
        console.log(`
        Finished seeding database        
        Closed connection to MongoDB`)
    })

