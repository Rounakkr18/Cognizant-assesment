class MyThread implements Runnable {
    private String name;

    public MyThread(String name) {
        this.name = name;
    }

    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(name + " - Message " + i);
            try {
                Thread.sleep(500); // Sleep for 0.5 seconds to observe interleaving
            } catch (InterruptedException e) {
                System.out.println(name + " interrupted.");
            }
        }
    }
}

public class ThreadExample {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyThread("Thread 1"));
        Thread t2 = new Thread(new MyThread("Thread 2"));

        t1.start();
        t2.start();
    }
}
