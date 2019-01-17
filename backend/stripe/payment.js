// missing something and need some help figuring out what it is, need second pair of eyes
const app = require('express');
const stripe = require('stripe')(process.env.STRIPE_TEST_KEY);

const stripeChargeCallback = res => (stripeErr, stripeRes) => {
	if (stripeErr) {
		res.status(500).send({ error: stripeErr });
	} else {
		res.status(200).send({ success: stripeRes });
	}
};

const paymentApi = app => {
	app.get('/', (req, res) => {
		res.send({
			message: 'Hello Stripe checkout server!',
			timestamp: new Date().toISOString(),
		});
	});

	app.post('/', async (req, res) => {
		const body = {
			token: req.body.token.id,
			amount: req.body.amount,
			currency: 'usd',
		};

		stripe.charges.create(body, stripeChargeCallback(res));
	});
	return app;
};
module.exports = paymentApi;
