mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    console.log('Connected'); // This should be your user handling code implement following the course videos
    app.listen(PORT);
  })
  .catch(err => {
    console.log(err);
  });