const express = require('express');
const app = express();
const router = express.Router();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Users = require('./server/models/users'); // Ensure the path is correct
const properties = require('./server/models/properties');

const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://dbreal:dbreal@cluster0.yh3xco3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/signup").then(()=>{
    console.log('connected')
}).catch((e)=>{
    console.log('failed')
    console.log(e)
})


app.use((req, res, next) => {
    req.user = { id: '60d21b4667d0d8992e610c85' }; // Replace with actual user ID from authentication
    next();
});

app.post("/", async (req, res) => {
 

    try {
        const check = await Users.findOne({ email: req.body.email }); 
        if (check) {
            res.json('exists');
        
        } else {
            res.json('notexists');
        }
    } catch (e) {
        res.status(500).json('error');
    }
});

app.post("/signup", async (req, res) => {
    const { email, password, firstName, lastName, phoneNumber } =  req.body;
  
    try {
        const existingUser = await Users.findOne({ email: email });

        if (existingUser) {
            res.json('exists');
        } else {
            const newUser = new Users({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber
            });

            await newUser.save();
            res.json('created');
            res.json(newUser)
        }
    } catch (e) {
        console.log(req.body)
        res.status(500).json('error');
    }
});


app.post("/properties", async (req, res) => {
    const {Fullname, Place, Area, Bedrooms, Bathrooms, Nearby ,sqft,price} = req.body;

    const newProperty = new properties({
        userId: req.user.id,
        Fullname,
        Place,
        Area,
        Bedrooms,
        Bathrooms,
        Nearby,
        sqft,
        price,
    });
    try {
        await newProperty.save();
        res.json('created');
        res.json(newProperty)
    } catch (e) {
        res.status(500).json('error');
    }
});

app.get('/properties/user', async (req, res) => {
    
    try {
        // const Properties = await properties.findone({ userId: req.user.id });
        const Properties = await properties.find({ });
        res.json(Properties);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch properties' });
    }
});

app.post('/properties/like', async (req, res) => {
    const obj = req.body;
    const[key] = Object.keys(obj); 
    
    try {
        // const property = await properties.({userId: req.user.id});
        // const property  = await properties.findone({Fullname: key});
        const property =  await properties.findOne({ Fullname: key});
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        property.likes += 1;
        property.save();
        res.json({ message: 'Property liked successfully' });
        res.json(newProperty) 
    } catch (error) {
        res.status(500).json({ error: 'Failed to like property' });
    }
});

app.listen(4000, () => {
    console.log('connected');
});