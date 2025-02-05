#include <stdio.h>

int max(int x, int y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
}

int main () {
    
    int x, y;
    printf("Digite um numero!\n");
    scanf("%d", &x);

    printf("Digite outro numero!\n");
    scanf("%d", &y);

    int resul = max(x, y);
    printf("O maior numero e %d", resul);

    return 0;
}