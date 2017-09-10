const redux = ( ) => {
  let data;
  let listens = [];

  setValue = ( value ) => {
    data = value;
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



  return {getValue, setValue, addListen };
};