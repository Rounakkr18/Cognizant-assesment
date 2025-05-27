public class TypeCastingExample {
    public static void main(String[] args) {
        double myDouble = 9.78;
        int castedInt = (int) myDouble;

        int myInt = 42;
        double castedDouble = (double) myInt;

        System.out.println("Original double value: " + myDouble);
        System.out.println("Double casted to int: " + castedInt);
        System.out.println("Original int value: " + myInt);
        System.out.println("Int casted to double: " + castedDouble);
    }
}
