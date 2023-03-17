const Manager = require("../lib/Manager");
test('testing if I can set name in the constructor', () => {
    const person = new Manager ("josh","123456","josh@yahoo.com","1234567");
    expect(person.name).toBe("josh");  
  });
test('testing if I can set id in the constructor', () => {
    const person = new Manager ("josh","123456","josh@yahoo.com","1234567");
    expect(person.id).toBe("123456");  
  });
test('testing if I can set email in the constructor', () => {
    const person = new Manager ("josh","123456","josh@yahoo.com","1234567");
    expect(person.email).toBe("josh@yahoo.com");  
  });
test('testing if I can set office number in the constructor', () => {
    const person = new Manager ("josh","123456","josh@yahoo.com","1234567");
    expect(person.officeNumber).toBe("1234567");  
  });
test('testing if getRole method works', () => {
    const person = new Manager ("josh","123456","josh@yahoo.com","1234567");
    expect(person.getRole()).toBe("Manager");  
  });

