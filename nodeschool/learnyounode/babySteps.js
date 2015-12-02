var args = Array.prototype.slice.call(process.argv);
console.log(args.slice(2).reduce( (prev, next) => ( Number(prev) + Number(next) ) ));
