Feature: Add Customer

	Scenario: Register Dengan Email yang valid
		Given User berada dalam halam Add Customer
		When User memilih "done"
		And User memasukan nama depan "anggi"
		And User memasukan nama belakang "saputra"
		And User memasukan email "ada_aja@gmail.com"
		And User memasukan alamat "Di jalanin aja dulu"
		And User memasukan Nomer telpon "081372645627"
		And User menekan submit
		Then User dapat melihat kredensial yand di berikan
		
	Scenario: Register Dengan Email yang invalid
		Given User berada dalam halam Add Customer
		When User memilih "done"
		And User memasukan nama depan "anggi"
		And User memasukan nama belakang "saputra"
		And User memasukan email "ada_aja_ah"
		And User memasukan alamat "Di jalanin aja dulu"
		And User memasukan Nomer telpon "081372645627"
		And User menekan submit
		Then User dapat melihat pemberi tahuan "Email-ID is not valid"