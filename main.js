const Commander = require("commander");

const subCommand = Commander.createCommand("yellow");
subCommand.addOption(new Commander.Option("-y, --messsage-yellow [message]"));
subCommand.action((args) => {
  console.log("Yellow Subcommand");
  console.log({ args });
  console.log({ opts: subCommand.opts() });
});

const sayHello = Commander.createCommand("say");
sayHello.addOption(new Commander.Option("-m, --message [message]"));
sayHello.addCommand(subCommand);
sayHello.action((args) => {
  console.log("Main command");
  console.log({ args });
  console.log({ opts: sayHello.opts() });
});

Commander.program.addCommand(sayHello);
Commander.program.parse();
