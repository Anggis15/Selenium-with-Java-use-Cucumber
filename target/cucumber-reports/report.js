$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featuresFile/EmailFeature.feature");
formatter.feature({
  "name": "Tentukan email valid atau engga.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Valid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Saya memasukan email \"anggis@ymail.com\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test formatnya",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_test_formatnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hasilnya harus \"benar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid email",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Saya memasukan email \"anggis\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test formatnya",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.saya_test_formatnya()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hasilnya harus \"salah\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.EmailFeatureStepDef.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/featuresFile/addCustomer.feature");
formatter.feature({
  "name": "Add Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Register Dengan Email yang valid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User berada dalam halam Add Customer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_berada_dalam_halam_Add_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memilih \"done\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memilih(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan nama depan \"anggi\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_nama_depan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan nama belakang \"saputra\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_nama_belakang(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"ada_aja@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan alamat \"Di jalanin aja dulu\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_alamat(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan Nomer telpon \"081372645627\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_Nomer_telpon(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan submit",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_menekan_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User dapat melihat kredensial yand di berikan",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_dapat_melihat_kredensial_yand_di_berikan()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Register Dengan Email yang invalid",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User berada dalam halam Add Customer",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_berada_dalam_halam_Add_Customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memilih \"done\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memilih(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan nama depan \"anggi\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_nama_depan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan nama belakang \"saputra\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_nama_belakang(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan email \"ada_aja_ah\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan alamat \"Di jalanin aja dulu\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_alamat(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User memasukan Nomer telpon \"081372645627\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_memasukan_Nomer_telpon(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User menekan submit",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_menekan_submit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User dapat melihat pemberi tahuan \"Email-ID is not valid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.AddCustomerStepDef.user_dapat_melihat_pemberi_tahuan(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});