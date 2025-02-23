// Simple check
const simpleEmailRegex = /\S+@\S+\.\S+/;
const isValidSimple = simpleEmailRegex.test('email@example.com');

// Complex check
const complexEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const isValidComplex = complexEmailRegex.test('email@example.com');
