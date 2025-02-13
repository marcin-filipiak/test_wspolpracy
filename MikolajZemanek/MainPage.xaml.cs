namespace rejestracja
{
    public partial class MainPage : ContentPage
    {
        int count = 0;

        public MainPage()
        {
            InitializeComponent();
        }

        private void OnRegisterClicked(object sender, EventArgs e)
        {
            string email = EmailEntry.Text?.Trim();
            string password = PasswordEntry.Text;
            string confirmPassword = ConfirmPasswordEntry.Text;

            if (string.IsNullOrWhiteSpace(email) || !email.Contains("@"))
            {
                MessageLabel.Text = "Nieprawidłowy adres e-mail";
                MessageLabel.TextColor = Colors.Red;
                return;
            }

            if (password != confirmPassword)
            {
                MessageLabel.Text = "Hasła się różnią";
                MessageLabel.TextColor = Colors.Red;
                return;
            }

            if (email.Contains("@") || password != confirmPassword)
            {
                MessageLabel.Text = $"Witaj {email}";
                MessageLabel.TextColor = Colors.Green;
            }
            
        }
    }

}
