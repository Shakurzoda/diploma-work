import { FormEvent, useState } from 'react';

const AuthPage = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };
    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleAuthorization = (event: FormEvent) => {
        event.preventDefault();

        if (!login.length || !password.length) {
            alert('Заполните все поля');
            return;
        }

        localStorage.setItem(
            'currentUser',
            JSON.stringify({
                login: login,
                role: 'student'
            })
        );
    };

    const handleAuthorizationTeacher = (event: FormEvent) => {
        event.preventDefault();

        if (!login.length || !password.length) {
            alert('Заполните все поля');
            return;
        }

        localStorage.setItem(
            'currentUser',
            JSON.stringify({
                login: login,
                role: 'teacher'
            })
        );
    };

    return (
        <div>
            <h1>Страница авторизации</h1>
            <form
                onSubmit={handleAuthorization}
                style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <label>
                    Login
                    <input type="text" onChange={onLoginChange} value={login} />
                </label>
                <label>
                    Password
                    <input type="password" onChange={onPasswordChange} value={password} />
                </label>
                <button type="submit"> Войти как студент</button>
                <button onClick={handleAuthorizationTeacher}>Войти как преподаватель</button>
            </form>
        </div>
    );
};

export default AuthPage;
