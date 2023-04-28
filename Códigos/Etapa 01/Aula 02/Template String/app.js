const postTitle = 'É bolacha ou biscoito'
const postAuthor = 'Matheus Saad'
const postComments = 15

// usando concatenação S5

//const postMessage = 'O post ' + postTitle + ', do ' + postAuthors + ', tem ' + postComments + ' comentários.'

/*console.log('Você manja do filme "As Branquelas"?')
console.log('Você manja do filme \'As Branquelas\'?')
console.log("Você manja do filme 'As Branquelas'?")*/

// usando template strings S6

//const postMessage = `O post "${postTitle}", do ${postAuthors}, tem ${postComments} comentários.`

//console.log(postMessage)


// criando templates HTML
const html = `
    <h2>${postTitle}</h2>
    <p>Autor: ${postAuthor}</p>
    <span>Este post tem ${postComments} comentários</span>
`

console.log(html)