package com.example.demo;

public class Controller {
    public String id;
    public int age;
    public String user;
    public String gender;
    public String country;
    public String language;
    public String employment;
    public String disciple;
    public String sensitivity;
    public String q1;
    public String q2;
    public String q3;
    public String q4;
    public String q5;
    public String q6;
    public String q7;


    public Controller() {
        createTable();
    }

    public static void createTable() {
        String url = "jdbc:sqlite:sqlite/JTP.db";

        String sql = "CREATE TABLE results (" +
                "'id' varchar(30) NOT NULL, " +
                "'user' varchar(13) NOT NULL, " +
                "'age' varchar(5) NOT NULL, " +
                "'gender' char(1) NOT NULL, " +
                "'country' varchar(28) NOT NULL, " +
                "'language' varchar(30) NOT NULL, " +
                "'employment' varchar(37) NOT NULL, " +
                "'disciple' varchar(19) NOT NULL, " +
                "'sensitivity' varchar(24) NOT NULL, " +
                "'q1' varchar(12) NOT NULL, " +
                "'q2' varchar(10) NOT NULL, " +
                "'q3' varchar(12) NOT NULL, " +
                "'q4' varchar(29) NOT NULL, " +
                "'q5' varchar(8) NOT NULL, " +
                "'q6' varchar(8) NOT NULL, " +
                "'q7' varchar(14) NOT NULL);\n";
        try (Connection conn = DriverManager.getConnection(url);
             Statement stmt = conn.createStatement()) {
            // create a new table
            stmt.execute(sql);
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    public static void queryPerson(String id) {
        String url = "jdbc:sqlite:sqlite/JTP.db";

        String sql = "select * FROM db.results WHERE id = \'" + id + "\';";
        try {
            stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery(query);
            while (rs.next()) {
                String id = rs.getString("id");
                String user = rs.getString("user");
                String age = rs.getString("age");
                String gender = rs.getString("gender");
                String country = rs.getString("country");
                String language = rs.getString("language");
                String employment = rs.getString("employment");
                String sensitivity = rs.getString("sensitivity");
                String q1 = rs.getString("q1");
                String q2 = rs.getString("q2");
                String q3 = rs.getString("q3");
                String q4 = rs.getString("q4");
                String q5 = rs.getString("q5");
                String q6 = rs.getString("q6");
                String q7 = rs.getString("q7");


                System.out.println(id + " | " + user + " | " + age +
                        " | " + gender + " | " + country + " | " + language +
                        " | " + employment + " | " + sensitivity + " | " + q1 +
                        " | " + q2 + " | " + q3 + " | " + q4 + " | " + q5 +
                        " | " + q6 + " | " + q7 + "\n");
            }
        } catch (SQLException e) {
            JDBCTutorialUtilities.printSQLException(e);
        } finally {
            if (stmt != null) {
                stmt.close();
            }
        }
    }
}
