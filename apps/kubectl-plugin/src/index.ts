import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { CoreImpl } from "core";
import { printTable } from "./printTable";

const core = new CoreImpl();

yargs(hideBin(process.argv))
  .scriptName("something")
  .usage("$0 <cmd> [args]")
  .command("list", "list the things", (argv) => {
    const things = core.listSomething();
    printTable(things);
  })
  .command({
    command: "*",
    handler() {
      yargs.showHelp();
    },
  })
  .showHelpOnFail(false)
  .help().argv;
