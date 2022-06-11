#include <stdio.h>
#include <math.h>

void main()
{
    float dividendo, divisor;

    printf("Digite um número para ser dividido: ");
    
    if (scanf("%f", &dividendo) != 1){
        printf("É necessário selecionar um número");
    }else{

        printf("Digite a quantidade para ser divida: ");

        if(scanf("%f", &divisor) != 1){
            printf("É necessário selecionar um número");
        }else{
            float resultadoDivisao;
            int restoDivisao;

            resultadoDivisao = dividendo/divisor;
            restoDivisao = fmod(dividendo,divisor);

            printf("O resultado da divisão é: %f \nE o resto dadivisão é de: %d",resultadoDivisao,restoDivisao);
        }

    }
}
