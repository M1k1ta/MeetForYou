import classNames from "classnames";
import { FC, FormEvent, useState } from "react";

export const Form: FC = () => {
  const [gender, setGender] = useState('Хлопця');
  const [age, setAge] = useState(26)

  const onRadioChange = (event: any) => {
    setGender(event.target.value);
  }

  const onRangeChange = (event: any) => {
    setAge(Number(event.target.value));
  }

  const handelSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log('GENDER', gender);
    console.log('AGE', age);
  }

  return (
    <form
      className="form"
      onSubmit={handelSubmit}
    >
      <article className="form__section">
        <p className="form__title">
          Шукаю : <span className="form__text">{gender}</span>
        </p>

        <div className="form__line"></div>

        <div className="form__radio radio">
          <label className="radio__label">
            <input
              className="radio__styled"
              type="radio"
              name="gender"
              value="Хлопця"
              onChange={onRadioChange}
            />
            <div className={classNames('radio__button', {
              'radio__button--active': gender === 'Хлопця',
            })}>
              <div className={classNames('radio__point', {
                'radio__point--active': gender === 'Хлопця',
              })}></div>
            </div>
            Хлопця
          </label>

          <label className="radio__label">
            <input
              className="radio__styled"
              type="radio"
              name="gender"
              value="Дівчину"
              onChange={onRadioChange}
            />
            <div className={classNames('radio__button', {
              'radio__button--active': gender === 'Дівчину',
            })}>
              <div className={classNames('radio__point', {
                'radio__point--active': gender === 'Дівчину',
              })}></div>
            </div>
            Дівчину
          </label>
        </div>

      </article>

      <article className="form__section">
        <p className="form__title">
          Вік : <span className="form__text">{age}</span>
        </p>

        <label className="form__range range">
          18
          <input
            className="range__custom"
            type="range"
            name="ages"
            min="18"
            max="80"
            value={age}
            onChange={onRangeChange}
          />
          80
        </label>
      </article>

      <button className="form__button" type="submit">Знайти</button>
    </form>
  );
}