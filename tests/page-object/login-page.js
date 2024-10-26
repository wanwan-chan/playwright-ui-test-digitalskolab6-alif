export class LoginPage {

  constructor(page) {
    this.page = page

    this.usenameTextBox = page.getByPlaceholder("Username")
    this.passwordTextBox = page.getByPlaceholder("Password")
    this.loginButton = page.getByText("Login")
  }

  async navigate() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async inputUsername(username) {
    await this.usenameTextBox.fill(username);
  }

  async inputPassword(password) {
    await this.passwordTextBox.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click()
  }

  async login (username, password) {
    await this.inputUsername(username)
    await this.inputPassword(password)
    await this.clickLoginButton()
  }
}
