'use strict';

// This function is used to create a new note
module.exports.createNote = async (event) => {
   // Set status code to 201 for newly created note
   const statusCode = 201;

   // Return a JSON stringified body containing the message that a new note was created
   return {
    statusCode: statusCode,
    body: JSON.stringify("A new note created!"),
   };
};


// This function updates a given note by its ID //
module.exports.updateNote = async (event) => {
  // Retrieve the ID of the note to update from the request path parameters //
  let notesID = event.pathParameters.id;

  // Return a status code of 200 and body string indicating that the note with the relevant ID has been updated // 
  return {
    statusCode: 200,
    body: JSON.stringify("A new note with the id " + notesID + " has been created!"),
  };
};


// This function deletes a given note by its ID //
module.exports.deleteNote = async (event) => {
  // Retrieve the ID of the note to update from the request path parameters //
  let notesID = event.pathParameters.id;
  // Return a status code of 200 and body string indicating that the note with the relevant ID has been updated // 
  return {
    statusCode: 200,
    body: JSON.stringify("The note with the id " + notesID + " has been deleted!"),
  };
};

// This function deletes a given note by its ID //
module.exports.getAllNotes = async (event) => {
  
  // Set status code to 200 for get
  const statusCode = 200;

  return {
    statusCode: 200,
    body: JSON.stringify("Returning all notes! "),
  };
};


