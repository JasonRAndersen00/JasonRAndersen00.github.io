

//load the json file
Promise.all([
  d3.json("resumes/example1.json")
]).then(function (files) {
  let resume1 = files[0]

  console.log(resume1)
})

