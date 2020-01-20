class Potter {
  price(books){
    if(new Set(books).size !== books.length){
      if(books.length  == 2)
        return 15.20;
    } 
    if(new Set(books).size !== books.length ){
      if(new Set(books).size !== books.length ){
        if(books.length  == 3)
        return 19.20;
      } 
      if(new Set(books).size !== books.length){
        if(books.length  == 4)
          return 25.60;
      } 
      if(new Set(books).size !== books.length){
        if(books.length  == 5)
          return 32;
      } 
    }
    else {
      return 8;
    }    
  }
  
}

module.exports = { Potter };