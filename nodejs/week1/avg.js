const args = process.argv.slice(2);
let total = 0;
let avarage = 0;
for (let i = 0; i < args.length; i++) {
  total = total + parseInt(args[i]);
}

avarage = total / args.length;
console.log(avarage);
