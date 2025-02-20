import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Bem-vindo à calculadora. Digite a operação seguida dos números, separados por espaços. Por exemplo: adicionar 5 3. Para sair, digite 'sair'.");

        while (true) {
            System.out.print("Digite a operação: ");
            String entrada = scanner.nextLine();

            if (entrada.equalsIgnoreCase("sair")) {
                System.out.println("Saindo da calculadora.");
                break;
            }

            String[] partes = entrada.split(" ");
            if (partes.length < 3) {
                System.out.println("Erro: entrada inválida. Digite a operação seguida de pelo menos dois números.");
                continue;
            }

            String operacao = partes[0].toLowerCase();
            try {
                double[] numeros = new double[partes.length - 1];
                for (int i = 1; i < partes.length; i++) {
                    numeros[i - 1] = Double.parseDouble(partes[i]);
                }

                boolean erro = false;
                double resultado = 0;

                switch (operacao) {
                    case "adicionar":
                        resultado = 0;
                        for (double num : numeros) {
                            resultado += num;
                        }
                        break;
                    case "subtrair":
                        if (numeros.length < 2) {
                            System.out.println("Erro: subtração requer pelo menos dois números.");
                            erro = true;
                        } else {
                            resultado = numeros[0];
                            for (int i = 1; i < numeros.length; i++) {
                                resultado -= numeros[i];
                            }
                        }
                        break;
                    case "multiplicar":
                        resultado = 1;
                        for (double num : numeros) {
                            resultado *= num;
                        }
                        break;
                    case "dividir":
                        if (numeros.length < 2) {
                            System.out.println("Erro: divisão requer pelo menos dois números.");
                            erro = true;
                        } else {
                            resultado = numeros[0];
                            for (int i = 1; i < numeros.length; i++) {
                                if (numeros[i] == 0) {
                                    System.out.println("Erro: divisão por zero.");
                                    erro = true;
                                    break;
                                }
                                resultado /= numeros[i];
                            }
                        }
                        break;
                    default:
                        System.out.println("Operação inválida. Use 'adicionar', 'subtrair', 'multiplicar' ou 'dividir'.");
                        erro = true;
                        break;
                }

                if (!erro) {
                    System.out.println("Resultado: " + resultado);
                }
            } catch (NumberFormatException e) {
                System.out.println("Erro: um dos operandos não é um número válido.");
            }
        }

        scanner.close();
    }
}