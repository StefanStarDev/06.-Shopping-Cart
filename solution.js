function solve() {
   let breadAdd = document.querySelector("body > div > div:nth-child(2) > div.product-add > button")
   let milkAdd = document.querySelector("body > div > div:nth-child(3) > div.product-add > button")
   let tomatoesAdd = document.querySelector("body > div > div:nth-child(4) > div.product-add > button")
   let textArea = document.querySelector("body > div > textarea")
   let checkOut = document.querySelector("body > div > button")
   let products = []
   let sum = 0

   breadAdd.addEventListener('click', () => {
      let name = document.querySelector("body > div > div:nth-child(2) > div.product-details > div").textContent
      let money = document.querySelector("body > div > div:nth-child(2) > div.product-line-price").textContent

      products.push(name)
      sum += +money
      let result = `Added ${name} for ${money} to the cart.\n`
      textArea.textContent += result
   })

   milkAdd.addEventListener('click', () => {
      let name = document.querySelector("body > div > div:nth-child(3) > div.product-details > div").textContent
      let money = document.querySelector("body > div > div:nth-child(3) > div.product-line-price").textContent
      products.push(name)

      sum += +money
      let result = `Added ${name} for ${money} to the cart.\n`
      textArea.textContent += result
   })

   tomatoesAdd.addEventListener('click', () => {
      let name = document.querySelector("body > div > div:nth-child(4) > div.product-details > div").textContent
      let money = document.querySelector("body > div > div:nth-child(4) > div.product-line-price").textContent
      products.push(name)

      sum += +money
      let result = `Added ${name} for ${money} to the cart.\n`
      textArea.textContent += result
   })


   checkOut.addEventListener('click', () => {
      let productsOutput = []
      for (const product of products) {
         if(!productsOutput.includes(product)){
            productsOutput.push(product)
         }
         
      }            
      textArea.textContent += `You bought ${productsOutput.join(', ')} for ${sum.toFixed(2)}.`
      breadAdd.disabled = true
      milkAdd.disabled = true
      tomatoesAdd.disabled = true
      checkOut.disabled = true
   })



}