const Employee = require("../lib/Employee");

test('testing if I can set name in the constructor', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.name).toBe("josh");  
  });
test('testing if I can set id in the constructor', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.id).toBe("123456");  
  });
test('testing if I can set email in the constructor', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.email).toBe("josh@yahoo.com");  
  });

  test('testing the getName method', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.getName()).toBe("josh");  
  });
  test('testing the getId method', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.getId()).toBe("123456");  
  });
  test('testing the getEmail method', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.getEmail()).toBe("josh@yahoo.com");  
  });
  test('testing the getRole method', () => {
    const person = new Employee ("josh","123456","josh@yahoo.com")
    expect(person.getRole()).toBe("Employee");  
  });


  
