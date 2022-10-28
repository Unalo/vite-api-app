export function greet(name, lang) {
  if (name) {
    if (lang === 'English') {
      return 'Hello, ' + name + '!';
    } else if (lang === 'Isixhosa') {
      return 'Molo, ' + name + '!';
    } else if (lang === 'Afrikaans') {
      return 'Hallo, ' + name + '!';
    } else if (lang === 'Tsivenda') {
      return '♀ Aa / ♂ Ndaa, ' + name + '!';
    } else if (lang === 'Zulu') {
      return 'Sawubona, ' + name + '!';
    } else if (lang === 'Sesotho') {
      return 'Dumela / Thobela, ' + name + '!';
    }
  }
}
