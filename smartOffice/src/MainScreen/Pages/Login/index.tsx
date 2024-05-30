import './Login.css';
import { FaMotorcycle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import usersDB from '../../../utils/Security/usuarios';

function LoginPage() {
  const { register, handleSubmit, getValues } = useForm({});
  const onsubmit = (data: any) => console.log(data);

  const onLogin = () => {
    const { username, password } = getValues();
    const user = usersDB.find((person) => {
      return person.userName === username && person.password === password;
    });
    if (user === undefined) return 'Usuário ou senha inválidos';
    if (user.role === 'admin') { window.location.href = '/services'; }
    if (user.role === 'employee') { window.location.href = '/services'; }
  };

  return (
    <form className="loginBar" onSubmit={ handleSubmit(onsubmit) }>
      <div className="iconLogin"><FaMotorcycle /></div>
      <input
        { ...register('username') }
        required
        className="loginInput"
        type="text"
        placeholder="Usuario"
      />
      <input
        { ...register('password', { required: 'A senha deve ser preenchida' }) }
        className="loginInput"
        type="password"
        placeholder="Senha"
      />
      <button className="loginBtn" onClick={ onLogin }>LOGIN</button>
    </form>
  );
}

export default LoginPage;
