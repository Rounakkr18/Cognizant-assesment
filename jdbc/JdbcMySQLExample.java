import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JdbcMySQLExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/school";
        String user = "root";      // your MySQL username
        String password = "rounak2003";  // replace with your MySQL password

        System.out.println("Connecting to the database...");

        try (Connection conn = DriverManager.getConnection(url, user, password);
             Statement stmt = conn.createStatement()) {
                System.out.println("Connected successfully!");

            String query = "SELECT id, name, age FROM students";
            ResultSet rs = stmt.executeQuery(query);

            while (rs.next()) {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");

                System.out.println("ID: " + id + ", Name: " + name + ", Age: " + age);
            }
            rs.close();

        } catch (Exception e) {
            System.out.println("Connection failed.");
            e.printStackTrace();
        }
    }
}
