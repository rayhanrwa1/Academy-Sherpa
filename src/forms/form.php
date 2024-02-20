<?php
// Sambungkan ke database
$conn = new mysqli("localhost", "root", "", "form");

// Periksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari permintaan POST
$nama = $_POST['nama'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$university = $_POST['university'];
$otherUniversity = $_POST['otherUniversity'];
$semester = $_POST['semester'];
$faculty = $_POST['faculty'];
$informationSource = $_POST['informationSource'];
$motivation = $_POST['motivation'];
$scholarshipGoal = $_POST['scholarshipGoal'];
$paymentMethod = $_POST['paymentMethod'];
$file_path = "uploads/" . basename($_FILES["file1"]["name"]);

// Simpan data ke database
$sql = "INSERT INTO form_data (nama, email, phone, university, otherUniversity, semester, faculty, informationSource, motivation, scholarshipGoal, paymentMethod, file_path)
        VALUES ('$nama', '$email', '$phone', '$university', '$otherUniversity', '$semester', '$faculty', '$informationSource', '$motivation', '$scholarshipGoal', '$paymentMethod', '$file_path')";

if ($conn->query($sql) === TRUE) {
    echo "Data berhasil disimpan";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Simpan file yang diunggah
move_uploaded_file($_FILES["file1"]["tmp_name"], $file_path);

$conn->close();
?>
