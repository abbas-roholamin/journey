/** @format */
export const getElementByIdElement = document.getElementById("my-element")

// Throw error for narrowing

export const element = document.getElementById("my-element")

if (!element) throw new Error("Element not found")
console.log(element)
