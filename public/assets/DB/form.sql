CREATE DATABASE IF NOT EXISTS form_database;
USE form_database;

CREATE TABLE IF NOT EXISTS form_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    university VARCHAR(255) NOT NULL,
    otherUniversity VARCHAR(255),
    semester VARCHAR(50) NOT NULL,
    faculty VARCHAR(255) NOT NULL,
    informationSource VARCHAR(50) NOT NULL,
    motivation TEXT NOT NULL,
    scholarshipGoal TEXT NOT NULL,
    paymentMethod VARCHAR(50),
    file_path VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
