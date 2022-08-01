package stepdefs;

import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EmailFeatureStepDef {
	String email = "";
	String hasil = "";
	
	@Given("Saya memasukan email {string}")
	public void saya_memasukan_email(String string) {
	    this.email = string;
	}

	@When("Saya test formatnya")
	public void saya_test_formatnya() {
	   if(this.email.contains("@")) {
		   this.hasil = "benar";
	   }else {
		   this.hasil = "salah";
	   }
	}

	@Then("Hasilnya harus {string}")
	public void hasilnya_harus(String string) {
	    Assert.assertTrue(this.hasil.equalsIgnoreCase(string));
	}
}
