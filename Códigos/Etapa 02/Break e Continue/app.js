// break e continue

const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue // A continue pula uma iteração em particular e faz com que o loop seja executado
    }
    console.log(`sua pontuação: ${scores[i]}`)

    if(scores[i] == 100){
        console.log('Parabéns!, você atingiu a pontuação máxima')

        break // o break para a executação do loop no caso parou os dois últimos após o 100, ignorando-os
    }
}