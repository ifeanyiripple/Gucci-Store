

require('dotenv').config()
const express = require('express');
var cors = require('cors');
const PORT = process.env.PORT || 4000;

const stripe = require('stripe')('sk_test_51No8IiILukUQPtjZSodKqTZbDpuWmEIYuBhMMbZu9Jzoj2voRWUwq8cilexhRHoXA6QYSpXMq2gy5bnTcxQg8VjC00uNrZfEBS');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach(async (item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        }
        )
    });
    
        const session = await stripe.checkout.sessions.create({
           line_items: lineItems, 
           mode: 'payment',
           success_url: "http://localhost:5173/success",
           cancel_url: "http://localhost:5173/cancel"
        });
         res.send(JSON.stringify({
           url: session.url 
         }));
    
   


});


app.listen(PORT, () => {
 console.log(`listening  at http://localhost:${PORT}`) });