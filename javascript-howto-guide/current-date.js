// Basic format
const today = new Date();
const date = ${today.getDate()}--;

// Padded format
const paddedDate = ${String(today.getDate()).padStart(2, '0')}--;
