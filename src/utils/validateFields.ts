export const validateName = (name: string): string => {
  if (!name || name.indexOf('') === -1) return 'Nome inválido!';

  if (name.indexOf(' ') === -1 || !name.split(' ')[1])
    return 'Digite pelo menos nome e sobrenome!';

  if (name.length > 50) return 'O nome pode ter no máximo 50 caracteres!';

  return '';
};

export const validateEmail = (email: string): string => {
  if (!email || email.indexOf('@') === -1) return 'E-mail inválido!';

  if (email.indexOf('@icomp.ufam.edu.br') === -1)
    return 'Este e-mail não pertence ao domínio do icomp!';

  if (email.split('@')[0].length < 3 || email.split('@')[0].length > 20)
    return 'Informe um e-mail válido!';

  const re = /^([\w.]{3,20})@icomp.ufam.edu.br$/gm;
  if (!re.test(email)) return 'Informe um e-mail icomp válido!';

  return '';
};

export const validateContactEmail = (email: string): string => {
  if (email && email.indexOf('@') === -1) return 'E-mail inválido!';

  if (
    email &&
    (email.split('@')[0].length < 3 || email.split('@')[0].length > 20)
  )
    return 'Informe um e-mail válido!';

  return '';
};

export const validatePassword = (name: string, password: string): string => {
  if (!password) return 'Informe uma senha!';

  if (password.length < 8 || password.length > 18)
    return 'Sua senha deve ter no mínimo 8 e no máximo 18 caracteres!';

  const firstName = name.split(' ')[0];
  if (
    name &&
    (password.indexOf(firstName) !== -1 ||
      password.indexOf(firstName.toLowerCase()) !== -1 ||
      password.indexOf(firstName.toUpperCase()) !== -1)
  )
    return 'Sua senha não pode conter seu nome!';

  return '';
};

export const validateConfirmPassword = (
  password: string,
  confirmPassword: string
): string => {
  if (!confirmPassword) return 'Campo obrigatório!';

  if (password !== confirmPassword)
    return 'A senha e a confirmação devem ser iguais!';

  return '';
};

export const validateCourse = (id: number): string => {
  if (!id) return 'Selecione um curso!';

  return '';
};

export const validateEnrollment = (enrollment: string): string => {
  if (!enrollment) return 'Campo obrigatório!';

  if (enrollment.length != 8 || !/^\d+$/.test(enrollment))
    return 'Informe uma matrícula valida!';

  return '';
};

export const validateLinkedin = (linkedin: string): string => {
  const re =
    /^(https:(?:\/\/)www.linkedin.com(\/)in(\/)([\w.#&-]{5,60}))(\/)$/gm;

  if (!linkedin) return '';

  if (!re.test(linkedin)) return 'Informe um linkedin válido!';

  return '';
};

export const validateWhatsapp = (whatsapp: string): string => {
  const re = /^([1-9]{1})(\d{10})$/gm;

  if (!whatsapp) return '';

  if (!re.test(whatsapp)) return 'Informe um número válido!';

  return '';
};
