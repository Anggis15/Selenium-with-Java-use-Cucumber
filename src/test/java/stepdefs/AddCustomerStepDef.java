package stepdefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class AddCustomerStepDef {
	WebDriver driver;
	
	@Given("User berada dalam halam Add Customer")
	public void user_berada_dalam_halam_Add_Customer() {
		System.setProperty("webdriver.chrome.driver", "C:\\webdriver\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.get("https://demo.guru99.com/telecom/addcustomer.php");
	}

	@When("User memilih {string}")
	public void user_memilih(String string) {
	    if(string.equalsIgnoreCase("done")) {
	    	driver.findElement(By.xpath("//*[@id=\"main\"]/div/form/div/div[1]/label")).click();
	    }else {
	    	driver.findElement(By.xpath("//*[@id=\"done\"]")).click();
	    }
	}

	@When("User memasukan nama depan {string}")
	public void user_memasukan_nama_depan(String string) {
	    driver.findElement(By.xpath("//input[@id='fname']")).sendKeys(string);
	}

	@When("User memasukan nama belakang {string}")
	public void user_memasukan_nama_belakang(String string) {
		driver.findElement(By.xpath("//*[@id=\"lname\"]")).sendKeys(string);
	}

	@When("User memasukan email {string}")
	public void user_memasukan_email(String string) {
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(string);
	}

	@When("User memasukan alamat {string}")
	public void user_memasukan_alamat(String string) {
		driver.findElement(By.name("addr")).sendKeys(string);
	}

	@When("User memasukan Nomer telpon {string}")
	public void user_memasukan_Nomer_telpon(String string) {
		driver.findElement(By.xpath("//*[@id=\"telephoneno\"]")).sendKeys(string);
	}
	@When("User menekan submit")
	public void user_menekan_submit() {
	    driver.findElement(By.xpath("//*[@id=\"main\"]/div/form/div/div[9]/ul/li[1]/input")).click();
	}


	@Then("User dapat melihat kredensial yand di berikan")
	public void user_dapat_melihat_kredensial_yand_di_berikan() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    String actual = driver.findElement(By.xpath("//h1[normalize-space()='Access Details to Guru99 Telecom']")).getAttribute("innerHTML");
	    String expect = "Access Details to Guru99 Telecom";
	    Assert.assertEquals(actual, expect);
	    driver.close();
	}

	@Then("User dapat melihat pemberi tahuan {string}")
	public void user_dapat_melihat_pemberi_tahuan(String string) {
	    String actual = driver.findElement(By.xpath("//*[@id=\"message9\"]")).getText();
	    Assert.assertEquals(actual, string);
	    driver.close();
	}

}
