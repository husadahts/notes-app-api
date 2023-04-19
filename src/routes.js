const { addNoteHandler, getAllNoteHandler, editNoteByIdHandler, deleteByIdHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path:'/notes',
    handler: addNoteHandler,
  },
  {
    method: "GET",
    path:'/notes',
    handler: getAllNoteHandler,
  },
  {
    method: "GET",
    path:'/notes/{id}',
    handler: getAllNoteHandler,
  },
  {
    method: "PUT",
    path:'/notes/{id}',
    handler:editNoteByIdHandler,
  },
  {
    method: "DELETE",
    path:'/notes/{id}',
    handler:deleteByIdHandler,
  },
];

module.exports = routes;

   
   

