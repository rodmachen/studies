var test = require('tap').test;

test('equivalence', function(t) {
  t.equal(1, 2, 'these two numbers are equal');
  t.end();
});

test('first stuff', function (t) {
  t.ok(true, 'true is ok')
  t.similar({a: [1,2,3]}, {a: [1,2,3]})
  t.end()
})