const shell = require('shelljs');
const path = require('path');

const root_path = path.join(__dirname, 'packages/server');
const server_path = path.join(__dirname, 'packages/server');
const web_path = path.join(__dirname, 'packages/web');

if (!shell.which('npm')) {
    shell.echo('Sorry, this script requires npm');
    shell.exit(1);
}

shell.mkdir('dist')

//shell.cd(server_path);


//shell.echo('hello world');
