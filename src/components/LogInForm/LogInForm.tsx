import { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import { loginUserThunk } from "../../redux/thunks/userThunks/userThunks";
import { ILogInForm } from "../../types/types";
import LogInFormStyled from "./LogInFormStyled";

const LogInForm = (): JSX.Element => {
  const formInitialState: ILogInForm = { username: "", password: "" };

  const [formData, setFormData] = useState<ILogInForm>(formInitialState);
  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    if (formData.username !== "" && formData.password !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const dispatch: AppDispatch = useAppDispatch();
  const submitLogin = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData = { ...formData };
    resetForm();

    dispatch(loginUserThunk(dispatchedData));
  };

  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off" onSubmit={submitLogin}>
        <label htmlFor="username"> Username </label>
        <input
          placeholder="johndoe"
          id="username"
          value={formData.username}
          onChange={changeFormData}
        />
        <label htmlFor="password"> Password </label>
        <input
          placeholder="password"
          id="password"
          type="password"
          value={formData.password}
          onChange={changeFormData}
        />
        <button disabled={buttonDisable} type="submit">
          Log In
        </button>
      </form>
      <Link className="redirect-link" to="/register">
        No account yet?
        <br />
        <span className="redirect-link__keyword">Register</span>
      </Link>
    </LogInFormStyled>
  );
};

export default LogInForm;
