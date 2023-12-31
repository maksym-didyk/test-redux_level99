import React, {
  FormEvent,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorsType } from '../../types/typedefs';
import { CustomInput } from '../CustomInput/CustomInput';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { setUsername } from '../../features/username/usernameSlice';

export const UsernameForm: React.FC = () => {
  const username = useAppSelector((state: RootState) => state.username);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState<ErrorsType[]>([]);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(event.target.value));

    if (event.target.value.length < 3) {
      setErrors(error => [...error, ErrorsType.username]);
    }

    if (event.target.value.length > 2) {
      setErrors(error => error.filter(val => val !== ErrorsType.username));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (username.length < 3) {
      setErrors(error => [...error, ErrorsType.username]);
    }

    if (username.length > 2) {
      navigate('/');
    }
  };

  return (
    <div className="singupform">
      <div className="singupform__header-text">
        Enter your name:
      </div>

      <form onSubmit={handleSubmit} className="singupform__form">
        <CustomInput
          type="text"
          name="username"
          value={username}
          placeholder="Your Name"
          errors={errors}
          errorstype={ErrorsType.username}
          onChange={handleUsernameChange}
        />

        <div className="field">
          <button
            type="submit"
            className="singupform__button"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
