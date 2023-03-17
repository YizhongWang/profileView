const Intern = require("../lib/Intern");
test('testing if I can set the name for intern', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.name).toBe("josh");  
  });
  test('testing if I can set id in the constructor', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.id).toBe("123456");  
  });
  test('testing if I can set email in the constructor', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.email).toBe("josh@yahoo.com");  
  });
  test('testing if I can set school name in the constructor', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.school).toBe("OSU");  
  });
  test('testing if getSchool method', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.getSchool()).toBe("OSU");  
  });
  test('testing if getRole method', () => {
    const person = new Intern ("josh","123456","josh@yahoo.com","OSU")
    expect(person.getRole()).toBe("Intern");  
  });

