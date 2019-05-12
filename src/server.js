const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const deploy = require('./deploy');

const PORT = 3000;

const shouldDeploy = body => {
    const { branch, status, pull_request } = JSON.parse(body.payload);

    console.log({ branch, status, pull_request });

    return branch === 'master' && status === 0 && pull_request === false;
};

const main = () => {
    const app = new Koa();

    app.use(bodyParser()).use(async ctx => {
        const { body, url } = ctx.request;

        if (url === '/notifications') {
            console.log('Received notifications!');
            try {
                if (shouldDeploy(body)) {
                    deploy();
                }
            } catch (err) {
                console.log('Deploy fauled: ', err);
            }
        }

        ctx.body = 'Ok';
    });

    app.listen(3000, () => {
        console.log(`Server is up and running on ${PORT} port!`);
    });
};

main();
