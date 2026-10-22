
import styles from "./Login.module.css";
import leafyBackground from "../assets/blue-white-leafy-background.jpg";

function Login() {
  return (
    <main className={styles.page}>
      <section className={styles.imageSection}>
        <img
          src={leafyBackground}
          alt="Decorative blue and white leafy background"
          className={styles.leafyImage}
        />
      </section>

      <section className={styles.loginSection}>
        <div className={styles.loginContent}>
          <h1 className={styles.greeting}>
            <span>Hello,</span> Guyss!
          </h1>

          <div className={styles.tabs}>
            <button
              type="button"
              className={styles.activeTab}
            >
              Login
            </button>

            <button
              type="button"
              className={styles.inactiveTab}
            >
              Signup
            </button>
          </div>

          <form className={styles.loginForm}>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              aria-label="Password"
              required
            />

            <button type="submit" className={styles.loginButton}>
              Login
            </button>
          </form>

          <div className={styles.socialSection}>
            <p>Or</p>

            <div className={styles.socialIcons}>
              <button
                type="button"
                className={styles.googleIcon}
                aria-label="Continue with Google"
              >
                G
              </button>

              <button
                type="button"
                className={styles.facebookIcon}
                aria-label="Continue with Facebook"
              >
                f
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Login;
