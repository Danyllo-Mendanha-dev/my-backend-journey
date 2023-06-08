// objetos em array
// Em arrays eu posso fazer com que cada item seje um objeto, nesse caso cada post ser um objeto

// const posts = [
//   {title: 'Empadão de Frango', likes: 30},
//   {title: '4 receitas de purê de batata', likes: 50}
// ]
// console.log(posts)

let user = {
  name: 'João',
  age: 31,
  email: 'joaocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: [
    {title: 'Empadão de Frango', likes: 30},
    {title: '4 receitas de purê de batata', likes: 50}
  ],
  login () {
    console.log('Usuário Logado')
  },
  logout () {
    console.log('Usuário Deslogado')
  },
  logBlogPosts () {
    console.log(`${this.name} escreveu os seguintes posts`)

    this.blogPosts.forEach(post =>{
        console.log(post.title, post.likes)
    }) 
  }
}
user.logBlogPosts()