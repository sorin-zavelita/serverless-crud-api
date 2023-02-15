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


module.exports.updateNote = async (event) => {
  let notesID = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify("A new note with the id " + notesID + " has been created!"),
  };
};

module.exports.deleteNote = async (event) => {
  let notesID = event.pathParameters.id;
  return {
    statusCode: 200,
    body: JSON.stringify("A new note with the id " + notesID + " has been deleted!"),
  };
};

module.exports.getAllNotes = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify("All nodes are returned!"),
  };
};
