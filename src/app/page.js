import WelcomeCard from './components/WelcomeCard';
import Counter from './components/Counter';
import StudentInfo from './components/StudentInfo';

export default function Home() {
  return (
    <main style={{
      backgroundColor: '#ffeef5',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      fontFamily: 'Segoe UI, sans-serif',
      gap: '30px'
    }}>
      <h1 style={{ color: '#cc3366', fontSize: '2.5rem' }}>
        MSAD React Components
      </h1>

      {/* Welcome Box */}
      <div style={{
        backgroundColor: '#fff0f7',
        color: '#cc3366',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgb(170, 37, 37)',
        width: '300px',
        textAlign: 'center'
      }}>
        <WelcomeCard name="Prince" />
      </div>

      {/* Counter Box */}
      <div style={{
        backgroundColor: '#ffe6f0',
        color: '#333',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgb(170, 37, 37)',
        width: '300px',
        textAlign: 'center'
      }}>
        <Counter />
      </div>

      {/* Student Info Box */}
      <div style={{
        backgroundColor: '#fff5f9',
        color: '#333',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgb(170, 37, 37)',
        width: '300px',
        textAlign: 'center'
      }}>
        <StudentInfo />
      </div>
    </main>
  );
}
