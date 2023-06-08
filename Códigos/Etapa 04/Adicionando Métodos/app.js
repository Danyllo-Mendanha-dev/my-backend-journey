// Adicionando Métodos

let user = {
    name: 'João',
    age: 31,
    email: 'joãocardoso@gmail.com',
    city: 'São Paulo',
    blogPosts: ['Empadão de Frango', '4 receitas de purê de batata'], 
    login: function () {
        console.log('Usuário Logado')
    },
    logout: function() {
        console.log('Usuário deslogado')
    }
}

user.login()
user.logout()
// const name = 'Joaquim'

// name.toUpperCase()
            