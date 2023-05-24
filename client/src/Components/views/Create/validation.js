const validation = (genre) => {
   const errors = {};

   if (genre.name.length < 4 || genre.name.length > 15) {
      errors.name = "It must be between 4 to 15 characters long.";
   }

   if (!/^https?:\/\//.test(genre.imagen)) {
      errors.imagen = "You must add the URL of an image.";
   }

   if (!genre.description) errors.description = "Please enter a valid description.";
   if (genre.description.length > 120) {
      errors.description = "You must include a description of less than 120 characters.";
   }

   if (!genre.platforms) {
      errors.platforms = "You must add a gaming platform.";
   }

   if (!genre.date) errors.date = "You must indicate the date of creation.";
   if (Date.parse(genre.date) > Date.now())
      errors.date = `Maximun date limit is: ${new Date().toLocaleDateString()}`;
   if (Date.parse(genre.date) < 0)
      errors.date = `Minimun date is: ${new Date(0).toLocaleDateString()}`;

   if (!genre.rating) {
      errors.rating = "You must indicate the rating.";
   }
   return errors;
};

export default validation;
