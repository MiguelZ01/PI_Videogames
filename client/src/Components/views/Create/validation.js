const validation = (genre) => {
   const errors = {};

   if (genre.name.length < 4 || genre.name.length > 15) {
      errors.name = "Debe tener entre 4 a 15 caracteres.";
   }

   if (!/^https?:\/\//.test(genre.imagen)) {
      errors.imagen = "Debes agregar la URL de una imagen";
   }

   if (!genre.description) errors.description = "Please enter a valid description";
   if (genre.description.length > 50) {
      errors.description = "Debes incluir una descripcion menor a 50 caracteres";
   }

   if (!genre.platforms) {
      errors.platforms = "Debes agregar una plataforma de juegos";
   }

   if (!genre.date) errors.date = "Debes indicar la fecha de creacion";
   if (Date.parse(genre.date) > Date.now())
      errors.date = `Maximun date limit is: ${new Date().toLocaleDateString()}`;
   if (Date.parse(genre.date) < 0)
      errors.date = `Minimun date is: ${new Date(0).toLocaleDateString()}`;

   if (!genre.rating) {
      errors.rating = "Debes indicar su rating";
   }
   return errors;
};

export default validation;
