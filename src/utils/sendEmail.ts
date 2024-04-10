import jwt from 'jsonwebtoken';
import { put } from '@api/users/user.service'
import { type User } from '@api/users/user.types'

const SECRET = process.env.JWT_SECRET!

export async function welcomeEmail(user: User) {

  interface Styles {
    container: string,
    title: string
  }

  const styles: Styles = {
    container: `
      background-color: #f5f5f5;
      border: 1px solid #e0e0e0;
    `,
    title: `
      font-size: 2rem;
      color: #325AD8 ;
    `
  }
  const email = {
    from: 'Test Kuepa<testkuepa@gmail.com>',
    to: user.email,
    subject: 'Usuario creado con exito!',
    html: `
      <div style='${styles.container}'>
        <h1 style='${styles.title}'>Hola ${user.name} </h1>
      </div>
    `,
    text: `Bienvenido(a) Kuepa Education`,
  };

  return email;
}

export async function recoveryPassword(user: User) {

  interface Styles {
    container: string,
    title: string
  }

  const styles: Styles = {
    container: `
      background-color: #f5f5f5;
      border: 1px solid #e0e0e0;
    `,
    title: `
      font-size: 2rem;
      color: #325AD8 ;
    `
  }

  const payload = { id: user.id };
  const token = jwt.sign(payload, SECRET, { expiresIn: `${1000 * 60 * 60}` });
  const link = `http://frontend.com/recovery?token=${token}`;

  await put(user.id, { recoveryToken: token });

  const email = {
    from: 'Test Kuepa<testkuepa@gmail.com>',
    to: user.email,
    subject: 'Recuperar clave de acceso',
    html: `
      <div style='${styles.container}'>
        <h1 style='${styles.title}'>Hola ${user.name} </h1>
        <p>Ingresa al siguiente link para recuperar tu clave de acceso ${link}</p>
      </div>
    `,
    text: `Bienvenid a nuestro Hotel`,
  };

  return email;
}
