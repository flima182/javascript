let num = [5, 3, 1, 9, 2]
//num[3] = 6
//num.push(9)
//num.length
//num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 9 está na posição ${pos}`)
}
