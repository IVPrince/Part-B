export default function WelcomeCard({ name }) {
  return (
    <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '20px', color: '#cc3366' }}>
        Welcome, {name}!
      </h2>
      <p style={{ marginTop: '5px', color: '#994d66' }}>
        Glad to have you here.
      </p>
    </div>
  );
}
