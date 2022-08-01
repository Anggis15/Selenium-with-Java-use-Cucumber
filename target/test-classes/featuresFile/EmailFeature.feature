Feature: Tentukan email valid atau engga.

	Scenario: Valid email
		Given Saya memasukan email "anggis@ymail.com"
		When Saya test formatnya
		Then Hasilnya harus "benar"
	
	Scenario: Invalid email
		Given Saya memasukan email "anggis"
		When Saya test formatnya
		Then Hasilnya harus "salah"