const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors')
app.use(cors(
    {
        origin:"*",
    }
));
const Users = require('./server/models/users'); // Ensure the path is correct
const properties = require('./server/models/properties');


const mongoose = require('mongoose');
 mongoose.connect("mongodb+srv://dbreal:dbreal@cluster0.yh3xco3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/signup").then(()=>{
    console.log('connected')
}).catch((e)=>{
    console.log('failed')
    console.log(e)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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
    console.log(email)
    try {
        const existingUser = await Users.findOne({ email: email});

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


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const Users = require('./server/models/users'); // Ensure the path is correct
// const Properties = require('./server/models/properties'); // Ensure the path is correct

// const app = express();

// // CORS configuration
// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your frontend URL
//     methods: 'GET,POST,PUT,DELETE,OPTIONS',
//     allowedHeaders: 'Content-Type,Authorization',
//     credentials: true
// }));

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Proxy configuration to handle CORS issues
// app.use('/api', createProxyMiddleware({
//     target: 'https://realsatate-project-hiring-challenge.onrender.com', // target host
//     changeOrigin: true, // needed for virtual hosted sites
//     onProxyReq: (proxyReq, req, res) => {
//         res.header("Access-Control-Allow-Origin", "*");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     },
//     onProxyRes: (proxyRes, req, res) => {
//         proxyRes.headers['Access-Control-Allow-Origin'] = '*';
//         proxyRes.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';
//         proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
//     }
// }));

// // MongoDB connection
// mongoose.connect("mongodb+srv://dbreal:dbreal@cluster0.yh3xco3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/signup")
//     .then(() => {
//         console.log('MongoDB connected');
//     })
//     .catch((e) => {
//         console.log('MongoDB connection failed');
//         console.error(e);
//     });

// // Middleware to set user
// app.use((req, res, next) => {
//     req.user = { id: '60d21b4667d0d8992e610c85' }; // Replace with actual user ID from authentication
//     next();
// });

// // Routes
// app.post("/", async (req, res) => {
//     try {
//         const check = await Users.findOne({ email: req.body.email });
//         if (check) {
//             res.json('exists');
//         } else {
//             res.json('notexists');
//         }
//     } catch (e) {
//         res.status(500).json('error');
//     }
// });

// app.post("/signup", async (req, res) => {
//     const { email, password, firstName, lastName, phoneNumber } = req.body;
//     try {
//         const existingUser = await Users.findOne({ email: email });
//         if (existingUser) {
//             res.json('exists');
//         } else {
//             const newUser = new Users({
//                 email,
//                 password,
//                 firstName,
//                 lastName,
//                 phoneNumber
//             });
//             await newUser.save();
//             res.json('created');
//         }
//     } catch (e) {
//         res.status(500).json('error');
//     }
// });

// app.post("/properties", async (req, res) => {
//     const { Fullname, Place, Area, Bedrooms, Bathrooms, Nearby, sqft, price } = req.body;
//     const newProperty = new Properties({
//         userId: req.user.id,
//         Fullname,
//         Place,
//         Area,
//         Bedrooms,
//         Bathrooms,
//         Nearby,
//         sqft,
//         price,
//     });
//     try {
//         await newProperty.save();
//         res.json('created');
//     } catch (e) {
//         res.status(500).json('error');
//     }
// });

// app.get('/properties/user', async (req, res) => {
//     try {
//         const properties = await Properties.find({ userId: req.user.id });
//         res.json(properties);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch properties' });
//     }
// });

// app.post('/properties/like', async (req, res) => {
//     const { Fullname } = req.body;
//     try {
//         const property = await Properties.findOne({ Fullname });
//         if (!property) {
//             return res.status(404).json({ error: 'Property not found' });
//         }
//         property.likes += 1;
//         await property.save();
//         res.json({ message: 'Property liked successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to like property' });
//     }
// });

// // Start the server
// app.listen(4000, () => {
//     console.log('Server is running on port 4000');
// });
