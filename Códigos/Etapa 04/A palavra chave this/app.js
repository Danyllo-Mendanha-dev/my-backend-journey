// a palavra chave this

let user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de Frango', '4 receitas de purê de batata'],
  login () {
    console.log('Usuário Logado')
  },
  logout () {
    console.log('Usuário Deslogado')
  },
  logBlogPosts () { // Esse método function declaration é intencional, porque as arrow functions funcionam de forma diferente com o this, quando eu uso uma function declaration como método e invoco esse método, o valor que o JavaScript atribui ao this é o objeto no qual o método tá sendo usado, o user

    console.log(`${this.name} escreveu os seguintes posts`)
    this.blogPosts.forEach(post =>{
        console.log(post)
    }) 
    // Quando eu usar um this dentro desse método, essa palavra-chave vai referenciar esse objeto user, o this ele é um objeto de contexto, ele representa o contexto no qual o código atual tá sendo executado, dependendo de onde eu uso o this, o valor dele vai mudar, se eu quiser que o this referencie o objeto no qual o método foi declarado eu preciso usar uma function declaration ao invés de uma arrow function.
  }
  //  logBlogPosts: function () {   tem uma forma de eu escrever essa função com uma sintaxe mais curta, ficaria assim logBlogPosts () { }, isso é um shortcut (atalho) para uma function declaration
}
user.logBlogPosts()