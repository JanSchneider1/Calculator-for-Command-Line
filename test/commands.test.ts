/*
let path = require('path');
let exec = require('child_process').exec;

function cli(args, cwd) {
    return new Promise(resolve => {
        exec(`node ${path.resolve('./index')} ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => { resolve({
                code: error && error.code ? error.code : 0,
                error,
                stdout,
                stderr })
            })
    })
}

test('Code should be 0', async () => {
    let result = await  cli(['-p', 'parameter'], '.');
    expect(result.code).toBe(0);
});
*/
