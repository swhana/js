let num = prompt('1부터 9까지 중 숫자를 입력해주세요');

if (num === '' || isNaN(num)) {
  alert('숫자를 입력해주세요');
} else if (num < 1 || num > 9) {
  alert('1부터 9까지 중 숫자를 입력해주세요');

  location.reload(); //새로고침
} else {
  for (let i = 1; i <= 9; i++) {
    document.write(i * num + '<br>');
  }
}
