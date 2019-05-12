const path = require('path');
const { execShell } = require('./utils');

const deploy = async () => {
    console.log('Deploying...');

    await execShell({
        command: 'bash deploy.sh',
        cwd: path.resolve(__dirname, '..')
    });

    console.log('Done!');
};

module.exports = deploy;
