public class PatternMatchingSwitch {
    public static void checkType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("It's an Integer with value: " + i);
            case String s -> System.out.println("It's a String: " + s);
            case Double d -> System.out.println("It's a Double: " + d);
            case null -> System.out.println("The object is null");
            default -> System.out.println("Unknown type: " + obj.getClass().getSimpleName());
        }
    }

    public static void main(String[] args) {
        checkType(123);
        checkType("Hello");
        checkType(45.67);
        checkType(null);
        checkType(true);
    }
}

