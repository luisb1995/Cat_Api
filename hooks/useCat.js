const CAT_ENDPOINT_RANDOM_FACT = "https://catfact.ninja/fact";

export const obtenerHecho = async () => {



    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await res.json();
    const { fact } = data;
    return fact;
  
};


obtenerHecho().then((newFact) => setFactt(newFact));
console.log(factt);