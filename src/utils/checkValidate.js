export const EmailValidate = (email) => {
  const checkEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/.test(
    email
  );

  if (!checkEmail) return "Email ID is Not Validate";
  else {
    return null;r
  }
};

export const PasswordValidate = (password) => {
  const checkPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);

  if (!checkPassword) return "Password is Not Validate";
  else {
    return null;
  }
};

export const UsernameValidate = (name) => {
  const checkName = /^[A-Za-z\s]+$/.test(name);

  if (!checkName) return "Name is Not Validate";
  else {
    return null;
  }
};
