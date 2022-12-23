import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import banner from "./img/banner.png";
import {
  Search,
  List,
  Eyeglasses,
  Windows,
  Virus,
  Journal,
  JournalText,
  Usb,
  UsbDrive,
} from "react-bootstrap-icons";
//Иконки за компоненти
import {
  Cpu,
  GpuCard,
  Memory,
  Motherboard,
  StopBtn,
  DeviceSsd,
  Pc,
  Fan,
  DeviceHdd,
  PostageFill,
} from "react-bootstrap-icons";
//Иконки за периферия
import {
  Keyboard,
  Mouse3,
  Headset,
  Camera,
  Controller,
  Display,
  Mic,
} from "react-bootstrap-icons";
import "./navbar.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="NavBar">
      <div className="navbar border-bottom border-danger navbar-expand-custom bg-dark bg-gradient">
        {/* Баннер в Navbar*/}
        <a className="navbar-brand justify-content-center" href="index.html">
          <img src={banner} className="mx-2" />
        </a>
        {/* Search в Navbar*/}
        <div
          className="container-lg  justify-content-center"
          id="Search_Form"
          style={{ width: 500 }}
        >
          <div className="row justify-content-center">
            <div className="col-12">
              <form className="form-label">
                <div className="input-group" style={{ minWidth: 400 }}>
                  <input
                    type={"search"}
                    className="form-control"
                    placeholder="Search"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <button
                    className="input-group-text bg-primary"
                    id="basic-addon2"
                  >
                    <Search className="text-light" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Collapse бутона в Navbar*/}
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="navbarNav"
          aria-expanded={open}
          variant=""
        >
          <button className="navbar-toggler">
            <List className="text-light" />
          </button>
        </Button>
        {/* Dropdown в Navbar*/}
        <Collapse in={open}>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav shadow-lg">
              <div className="nav-item my-3 mx-4 " id="navbarNav">
                <a
                  href="Periferia.html"
                  className="nav-link text-light  ps-2 justify-content-center"
                  id="navbarNav"
                >
                  <h4>Компютри</h4>
                </a>
              </div>
              {/*Dropdown за Компоненти начало*/}
              <li className="nav-item dropdown my-3 mx-2 " id="navbarNav">
                <button
                  className="btn text-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4>Компоненти</h4>
                </button>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="/Components/Processors.html"
                    >
                      <Cpu /> Процесори
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <GpuCard /> Видео карти
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Memory /> RAM памети
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Motherboard /> Дънни платки
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <StopBtn /> Захранвания
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <DeviceSsd /> SSD дискове
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <DeviceHdd /> HDD дискове
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Pc /> Кутии
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <PostageFill /> Охладители
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Fan /> Вентилатори
                    </a>
                  </li>
                </ul>
              </li>
              {/* Dropdown за Периферия начало*/}
              <li className="nav-item dropdown my-3 mx-2 " id="navbarNav">
                <button
                  className="btn text-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4>Периферия</h4>
                </button>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Keyboard /> Клавиатури
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Mouse3 /> Мишки
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Headset /> Слушалки
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Mic /> Микрофони
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Camera /> Камери
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Controller /> Контолери
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Display /> Монитори
                    </a>
                  </li>
                </ul>
              </li>
              {/* Dropdown за Аксесоари и Софтуери начало*/}
              <li className="nav-item dropdown my-3 mx-2" id="navbarNav">
                <button
                  className="btn text-white dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <h4>Аксесоари</h4>
                </button>
                <ul
                  className="dropdown-menu bg-dark"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Eyeglasses /> Очила
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Windows /> Операционни системи
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <Virus /> Антивирусни
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <JournalText /> Офис програми
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <UsbDrive /> Флашки
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item h5 border-4 border-bottom border-primary text-light"
                      href="#"
                    >
                      <DeviceHdd /> Преносими HDD
                    </a>
                  </li>
                </ul>
              </li>
              {/* Количка*/}
              <li
                className="navbar-nav active text-light my-3 mx-5 "
                id="navbarNav"
              >
                <button
                  type="button"
                  className="btn text-light position-relative "
                  id="myCartButton"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    id="myCart"
                  >
                    0
                  </span>
                </button>
              </li>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default NavBar;
