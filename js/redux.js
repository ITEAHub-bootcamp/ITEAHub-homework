const redux = ( ) => {
  let data;
  let listens = [];

  setValue = ( oper ) => {
    if ( oper = 'INCREMENT'){
      data = data + 1
    } else if ( oper = 'DECREMENT') {
      data = data - 1;
    }
    listens.forEach( listen => listen());
    // return data;
  };

  getValue = () => { data };

  addListen = (listen) => {
    let tmp = listens.filter( item => item === listen);
    if (!tmp.length){
      listens.push(listen);
    }
    return () => {
      listens = listens.filter( item => item !== listen);
    };
  };



  return {getValue, setValue, removeListen };
};