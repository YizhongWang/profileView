const Engineer = require("../lib/Engineer");
test('testing if I can set name in the constructor', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.name).toBe("josh");  
  });
test('testing if I can set id in the constructor', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.id).toBe("123456");  
  });
test('testing if I can set email in the constructor', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.email).toBe("josh@yahoo.com");  
  });
test('testing if I can set github user name in the constructor', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.github).toBe("@josh");  
  });
test('testing if I can test getGithub method', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.getGithub()).toBe("@josh");  
  });
test('testing if I can test getRole method', () => {
    const person = new Engineer ("josh","123456","josh@yahoo.com","@josh")
    expect(person.getRole()).toBe("Engineer");  
  });
