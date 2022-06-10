#include <stdio.h>

void verificarSeNumeroEPositivoOuNegativo(){
    int numero;

    printf("Digite um número: ");
    
    if (scanf("%d", &numero) != 1){
        printf("É necessário selecionar um número");
    }else{

        if (numero > 0) printf("O número é positivo");
        else if (numero < 0) printf("O número é negativo");
        else printf("O número não é nem negativo nem positivo");

    }
}

void main()
{
    verificarSeNumeroEPositivoOuNegativo();
}