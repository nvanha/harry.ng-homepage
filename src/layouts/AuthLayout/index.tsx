const AuthLayout = ({ children }) => (
  <div id="auth-layout" className="auth-layout">
    <main className="pt-14 px-4 max-w-3xl mx-auto">
      <div className="relative z-[2]">{children}</div>
    </main>
  </div>
);

export default AuthLayout;
