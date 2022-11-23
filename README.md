# Command and Sub Command with Same Option

## Current Behavior

If you have a command and a sub command with the same option, then when you
invoke `program command subcommand -o option` the subcommand will not receive
the option.

## Expected Behavior

When you invoke `program command subcommand -o option` the subcommand recieves
the options passed, just like the command does.

## Reproduction Steps

1. Clone this repo
2. Run your package manager install of choice e.g. `pnpm i`
3. Run `node index.js say -m hello` to see the main command output
4. Run  `node index.js say yellow -m hello` to see the sub command output
5. Observe that the sub command does not have any options passed to it

To see that the sub command does work, you can run the command
`node main.js say yellow -y hello`. 

## Commander Info

version: 9.4.1
