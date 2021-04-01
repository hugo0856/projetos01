var nome, nota01,nota02;
nome = prompt("digite seu nome: ")
nota01 = prompt("digite a nota 01 do alno: ")
nota02 = prompt("digite a nota 02 do aluno: ")

media = parseInt(nota01) + parseInt (nota02) / 2;

if(media >= 50)
    alert("Aprovado!" + nome)

else
    alert("Reprovado!" + nome)