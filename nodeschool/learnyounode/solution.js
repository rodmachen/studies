    var filterFn = require('./solution_filter.js')

    filterFn(process.argv[2], process.argv[3], function (err, list) {
      if (err)
        return console.error('There was an error:', err)

      list.forEach(function (file) {
        console.log(file)
      })
    })