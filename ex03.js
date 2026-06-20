const authors = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
const arrayAuthors = authors.split(",");

arrayAuthors.forEach(author => console.log(author));

function hasAuthor(list, author) {
   return list.includes(author)
    ? '\nAutor encotrado\n'
    : '\nAutor não encontrado\n'
}

console.log(hasAuthor(arrayAuthors, 'Machado de Assis'))
 
const authors2 = 'J. K. Rowling,J. R. R. Tolkien'
const arrayAuthors2 = authors2.split(',')

arrayAuthors2.forEach(authors => console.log(authors))

console.log(hasAuthor(arrayAuthors2, 'Machado de Assis'));

function createBook(title, author) {
    console.log(`Novo livro cadastrado: ${title} - ${author}`);
}

createBook('Dom Casmurro', 'Machado de Assis')

console.log(arrayAuthors.join(","))
console.log(arrayAuthors2.join(","))



