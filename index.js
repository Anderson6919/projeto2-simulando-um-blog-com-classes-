const Author = require('./author');
const Comment = require('./comment');
const Post = require('./post');

const author = new Author('John');
const post = author.createPost('primeiro post', 'Conteúdo do post.');

const comment1 = new Comment('Legal');
const comment2 = new Comment('Bom demais.');

post.addComment(comment1);
post.addComment(comment2);

console.log(`Autor: ${post.author.name}`);
console.log(`Título: ${post.title}`);
console.log(`Conteúdo: ${post.content}`);
console.log('Comentários:');
post.comments.forEach(comment => {
    console.log(`- ${comment.content}`);
});
