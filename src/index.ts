#!/usr/bin/env ts-node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

//clear();
console.log(
  chalk.cyan(
    figlet.textSync('pizza-cli', { horizontalLayout: 'full' })
  )
);
console.log('');

program
  .version('0.0.1')
  .description("An example CLI for ordering pizza's")
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese <type>', 'Add the specified type of cheese [marble]')
  .option('-C, --no-cheese', 'You do not want any cheese')
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  console.log(chalk.yellow(program.helpInformation()));
} else {
  const options = program.opts();

  /*
  console.log('you ordered a pizza with:');
  if (program.peppers) console.log('  - peppers');
  if (program.pineapple) console.log('  - pineapple');
  if (program.bbq) console.log('  - bbq');
  const cheese: string = true === program.cheese ? 'marble' : program.cheese || 'no';
  console.log('  - %s cheese', cheese);
  */

  console.log('you ordered a pizza with:');
  if (options.peppers) console.log('  - peppers');
  if (options.pineapple) console.log('  - pineapple');
  if (options.bbq) console.log('  - bbq');

  const cheese: string = undefined === options.cheese
    ? 'marble'
    : options.cheese || 'no';

  console.log('  - %s cheese', cheese);
  /*
  */
}
