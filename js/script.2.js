function currentRate() {
var rateEuro = 30.46;
    rateDollar = 25.58;
    userEuro = +prompt('Enter EUR',100);
    userDollar = +prompt('Enter USD',100);

alert(userEuro+' euros are equal '+((rateEuro*userEuro).toFixed(2))+' grns,\n'
      +userDollar+' dollars are equal '+((rateDollar*userDollar).toFixed(2))+' grns,\n'
      +'One euro is equal '+((rateEuro/rateDollar).toFixed(2))+' dollars.');
}
