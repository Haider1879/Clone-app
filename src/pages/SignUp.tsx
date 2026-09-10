

const SignUp: React.FC = () => {
  return (
    <div>
      <h1>Sign Up Form</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up Form</button>
      </form>
    </div>
  );
};

export default SignUp;