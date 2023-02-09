import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { popUpAction } from "../../../redux/slice/slicePopUp";
import "../PopUp/popup.scss";
import shortid from "shortid";

export const PopUpCity = () => {
  const city = useSelector((s: any) => s.popUpReducer.city);
  const dispatch = useDispatch();
  const getCurrentCity = (e) => {
    dispatch(popUpAction.ChooseCurrentCity(e.target.innerHTML));
  };
  return (
    <div className="modal modal__city">
      <ul className="modal__list">
        {city.map((c) => (
          <li key={shortid.generate()} className="modal__list-item">
            {
              <NavLink
                onClick={getCurrentCity}
                className="modal__list-link"
                to={c}
              >
                {c}
              </NavLink>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PopUpRestaurant = () => {
  return (
    <>
      <div className="modal modal__restaurant">
        <ul className="modal__list">
          <li className="modal__list-item">
            <a className="modal__link" href="#">
              вул. Оноре де Бальзака, 63
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              Hвул. Вадима Гетьмана, 6, ТРЦ "COSMO MULTIMALL"
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              вул. Маршала Тимошенка, 21, корпус 3
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              вул. Велика Васильківська, 76
            </a>
          </li>
          <li className="modal__list-item">
            <a className="modal__list-link" href="#">
              пр. Перемоги, 136
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};