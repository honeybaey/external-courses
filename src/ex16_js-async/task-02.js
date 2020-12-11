const countries = [
  "Нидерланды",
  "Лаос",
  "Пакистан",
  "Румыния",
  "Словакия",
  "Чили",
  "Бразилия",
  "Аргентина",
  "Португалия",
];

const searchInput = document.getElementById("search-input");

const debounce = (fn, ms) => {
  let timeout;

  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };

    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};

function onChange(e) {
  console.log(countries.find((item) => e.target.value === item));
}

onChange = debounce(onChange, 200);

searchInput.addEventListener("keyup", onChange);

module.exports = debounce;
