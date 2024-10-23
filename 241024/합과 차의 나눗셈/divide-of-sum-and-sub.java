import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        double a = (double)sc.nextInt();
        int b = sc.nextInt();

        double c = (a+b)/(a-b);

        System.out.printf("%.2f",c);
    }
}