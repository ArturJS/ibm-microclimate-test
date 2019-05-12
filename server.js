const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const PORT = 3000;

const main = () => {
    const app = new Koa();

    app.use(bodyParser()).use(async ctx => {
        const { body, url } = ctx.request;

        if (url === '/notifications') {
            console.log('Received notifications!');
            console.log(body);
        }

        ctx.body = 0;
    });

    app.listen(3000, () => {
        console.log(`Server is up and running on ${PORT} port!`);
    });
};

main();
