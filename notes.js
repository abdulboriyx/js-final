const today = dayjs();
const goalDay = today.add(100, 'days');
console.log(goalDay.format('dddd, MMMM D'));