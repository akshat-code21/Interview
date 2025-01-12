import { useNavigate } from 'react-router-dom';

const Invalid = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            padding: '2rem'
        }}>
            <h2>Invalid User</h2>
            <p>You are not authorized to view this page.</p>
            <button onClick={() => navigate('/')}>
                Back to Login
            </button>
        </div>
    );
}

export default Invalid;
