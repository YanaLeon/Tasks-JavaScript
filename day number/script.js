// 2) Вывести порядковый номер дня, недели и название дня. В функцию передается дата в формате "dd.mm.yyyy"

function dateNumber (date)  {
    let [day, month, year] = date.split('.');
    let newDate = new Date(year, month - 1, day);
    let startDate = new Date(year, 0, 0);
    let timDif  = newDate - startDate;

    // получаем порядковый номер дня
    let days = Math.floor(timDif/1000/60/60/24);

    // получаем название дня
    let daysWeek = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    let currentDaysWeek = daysWeek[newDate.getDay()];

    // получаем номер недели
    let week = (timDif/1000/60/60/168).toFixed(0); // 168 часов в неделе 24 * 7 = 168

    return [days, week, currentDaysWeek]

}

console.log(dateNumber('31.12.2023'))