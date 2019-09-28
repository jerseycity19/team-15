package com.example.demo;

import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Null;


public class Person {
    public String id;
    public String user;
    public String age;
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

    final String table = "results";
    final String database = "db";

    public Person(String id_, String user_, String age_, String gender_, String country_, String language_, String employment_, String disciple_, String sensitivity_, String q1_, String q2_, String q3_, String q4_, String q5_, String q6_, String q7_) {
        id = id_;
        user = user_;
        age = age_;
        gender = gender_;
        country = country_;
        language = language_;
        employment = employment_;
        disciple = disciple_;
        sensitivity = sensitivity_;
        q1 = q1_;
        q2 = q2_;
        q3 = q3_;
        q4 = q4_;
        q5 = q5_;
        q6 = q6_;
        q7 = q7_;
    }

    public void sendToSql() {
        String command = "INSERT INTO results(id, user, age, gender, country, language, employment, disciple, sensitivity, q1, q2, q3, q4, q5, q6, q7) " +
                "VALUES (" + addQuotes(id_) + addQuotes(user_) + addQuotes(age_) + addQuotes(gender_) + addQuotes(country_) + addQuotes(language_) + addQuotes(employment_) +
                addQuotes(disciple_) + addQuotes(sensitivity_) + addQuotes(q1) + addQuotes(q2) + addQuotes(q3) + addQuotes(q4) + addQuotes(q5) + addQuotes(q6)
                + "\'" + q7_ + "\'" + ");";
    }

    private String addQuotes(String s) {
        return "\'" + s + "\', ";
    }
}
