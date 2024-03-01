import React, { Component, useState, useEffect } from "react";
import MainHeader from "./header/MainHeader";
import btns from "../../images/btns.png";
import optionsBtns from "../../images/options-btns.png";
import arrow from "../../images/arrow.png";
import "./main-content.css";

function MainContent() {
  // Список товара
  const [list, setList] = useState([
    {
      number: "2",
      stock: "Караганда",
      date: "01/12/2002",
      sum: "13214",
      counter: "69",
      status: false,
    },
    {
      number: "1",
      stock: "Шахтинск",
      date: "23/03/2013",
      sum: "24142",
      counter: "96",
      status: true,
    },
    {
      number: "3",
      stock: "Астана",
      date: "10/02/2025",
      sum: "12412",
      counter: "228",
      status: null,
    },
    {
      number: "4",
      stock: "Алмата",
      date: "14/07/2015",
      sum: "5433",
      counter: "337",
      status: false,
    },
    {
      number: "5",
      stock: "Алмата",
      date: "13/12/2022",
      sum: "63234",
      counter: "123",
      status: true,
    },
    {
      number: "6",
      stock: "Шахтинск",
      date: "31/05/2021",
      sum: "2351",
      counter: "321",
      status: false,
    },
    {
      number: "7",
      stock: "Абай",
      date: "01/01/2023",
      sum: "536",
      counter: "111",
      status: null,
    },
    {
      number: "8",
      stock: "Шымкент",
      date: "01/12/2005",
      sum: "1",
      counter: "222",
      status: null,
    },
    {
      number: "9",
      stock: "Караганда",
      date: "01/12/2007",
      sum: "236523",
      counter: "333",
      status: true,
    },
    {
      number: "10",
      stock: "Актас",
      date: "01/12/2009",
      sum: "69",
      counter: "444",
      status: true,
    },
  ]);
  //Колличество показываемого товара
  const quantityOfItems = 4;

  //Сколько кнопок навигации списка товара показывать
  const btnslength = [];
  for (let i = 1; i <= Math.ceil(list.length / quantityOfItems); i++) {
    btnslength.push(i);
  }

  //Перелистывание товаров по кнопкам
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(quantityOfItems);

  //Активная кнопка списка
  const [activeBtnList, setActiveBtnList] = useState(1);


  // изменение активной кнопки в реальном времени
  useEffect(() => {
    setStart((activeBtnList - 1) * quantityOfItems);
    setEnd(
      quantityOfItems * activeBtnList > list.length
        ? list.length
        : quantityOfItems * activeBtnList
    );
  }, [activeBtnList]);

  //меняем активную кнопку по нажатию на цифры
  function btnClick(x) {
    setActiveBtnList(x);
  }
//перелистываем назад
  function btnPrevClick() {
    if (activeBtnList == 1) return;
    setActiveBtnList(activeBtnList - 1);
  }
// перелистываем вперед
  function btnNextClick() {
    if (activeBtnList == btnslength.length) return;
    setActiveBtnList(activeBtnList + 1);
  }

  //Сортировка по номеру
  const [sortByNumDirection, setSortByNumDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortByNum() {
    setList(
      [...list].sort((a, b) =>
        sortByNumDirection ? a.number - b.number : b.number - a.number
      )
    );
    setSortByNumDirection(!sortByNumDirection); // меняет направление сортировки 
  }

  //Сортировка по складу
  const [sortByStockDirection, setSortByStockDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortByStock() {
    setList((prevList) => {
      const sortedList = [...prevList].sort((a, b) => {
        const nameA = a.stock.toLowerCase();
        const nameB = b.stock.toLowerCase();

        return sortByStockDirection
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });

      setSortByStockDirection(!sortByStockDirection); // меняет направление сортировки 

      return sortedList;
    });
  }

  //Сортировка по сумме
  const [sortBySumDirection, setSortBySumDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortBySum() {
    setList(
      [...list].sort((a, b) =>
        sortBySumDirection ? a.sum - b.sum : b.sum - a.sum
      )
    );
    setSortBySumDirection(!sortBySumDirection); // меняет направление сортировки 
  }

  //Сортировка по колличеству товара
  const [sortByCounterDirection, setSortByCounterDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortByCounter() {
    setList(
      [...list].sort((a, b) =>
        sortByCounterDirection ? a.counter - b.counter : b.counter - a.counter
      )
    );
    setSortByCounterDirection(!sortByCounterDirection); // меняет направление сортировки 
  }

  //Сортировка по статусу
  //Тут я не понял какой приоритет сортировки должен быть, по этому сделал так как кажется правильно
  //Приоритет сортировки - доставленно/доставляется/не исполненно. Приоритет можно изменить
  //Приоритет обратной сортировки оставил стандартным
  const [sortByStatusDirection, setSortByStatusDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortByStatus() {
    setList(
      [...list].sort((a, b) => {
        if (sortByStatusDirection) {
          if (a.status === null) return -1;
          return a.status - b.status;
        } else {
          // if (b === null && a !== false) return -1;
          return b.status - a.status;
        }
      })
    );
    setSortByStatusDirection(!sortByStatusDirection); // меняет направление сортировки 
  }

  //Сортировка по дате
  const [sortByDateDirection, setSortByDateDirection] = useState(true); // отслеживает направление сортировки от большего к меньшему и наоборот
  function sortByDate() {
    // копируем массив в котором меняем дату на формат читаемый приложением
    let newList = [...list];
    newList.forEach((i) => {
      const [day, month, year] = i.date.split("/");
      i.date = new Date(year, month - 1, day);
    });
    // Сортируем массив по дате
    newList.sort((a, b) =>
      sortByDateDirection ? a.date - b.date : b.date - a.date
    );

    // Меняем в массиве значение даты на изначальное
    newList.forEach((i) => {
      const day = i.date.getDate();
      const month = i.date.getMonth() + 1;
      const year = i.date.getFullYear();
      i.date = `${day}/${month}/${year}`;
    });

    //переносим изменения
    setList(newList);
    setSortByDateDirection(!sortByDateDirection); // меняет направление сортировки 
  }
  return (
    <div className="wrapper">
      <MainHeader />
      <div className="product-wrapper">
        <p className="product-info">Информация по товарам</p>
        <ul className="product-nav">
          <li>
            <a href="#" className="">
              Остатки
            </a>
          </li>
          <li className="active">
            <a href="#" className="">
              Оприходование
            </a>
          </li>
          <li>
            <a href="#" className="">
              Перемещение
            </a>
          </li>
          <li>
            <a href="#" className="">
              Списание
            </a>
          </li>
          <li>
            <a href="#" className="">
              Инвентаризация
            </a>
          </li>
        </ul>
      </div>
      <section className="main-content box">
        <div className="main-content-header">
          <button>Добавить</button>
          <div className="searchinp-wrapper">
            <input
              type="text"
              className="search"
              placeholder="поиск предмета"
            />
          </div>
          <img src={btns} alt="" className="btns" />
        </div>
        <div className="content">
          <ul className="content-ul">
            <li className="default">
              <input type="checkbox" className="checkbox" name="" id="" />
              <p className="number" onClick={() => sortByNum()}>
                Номер
              </p>
              <p className="stock" onClick={() => sortByStock()}>
                Склад
              </p>
              <p className="date" onClick={() => sortByDate()}>
                Дата добавления
              </p>
              <p className="sum" onClick={() => sortBySum()}>
                сумма
              </p>
              <p className="counter" onClick={() => sortByCounter()}>
                Кол-во
              </p>
              <p className="status" onClick={() => sortByStatus()}>
                Статус
              </p>
              <p className="options">Опции</p>
            </li>
            {list.slice(start, end).map((x, index) => (
              <li className="nice" key={index}>
                <input type="checkbox" className="checkbox" name="" id="" />
                <p className="number">{x.number}</p>
                <p className="stock">{x.stock}</p>
                <p className="date">{x.date}</p>
                <p className="sum">{x.sum}</p>
                <p className="counter">{x.counter}</p>
                <p className="status">
                  {x.status
                    ? "Исполнено"
                    : x.status == false
                    ? "Не исполнено"
                    : "Доставляется"}
                </p>
                <img src={optionsBtns} alt="" className="options-btns" />
              </li>
            ))}
          </ul>
          <div className="content-bottom">
            <p>
              Показано {quantityOfItems} документа из {list.length}
            </p>
            <div className="btn-wrapper">
              <button onClick={() => btnPrevClick()} className="arrow-btns"> <img src={arrow} alt="" /> </button>
              {btnslength.map((x) => (
                <button
                  className={`list-btn ${activeBtnList === x ? 'active' : ''}`}
                  onClick={() => btnClick(x)}
                  key={x}
                >
                  {x}
                </button>
              ))}
              <button onClick={() => btnNextClick()} className="arrow-btns right-arrow"> <img src={arrow} alt="" /> </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainContent;
