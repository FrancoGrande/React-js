export const usePaginate = (array, itemsPerPage) => {
    const [currentPage, setCurrentPage]= useState(1);

    let totalPages = Math.ceil(array.length / itemsPerPage)

    const currentArray= array.slice.(
        (currentPage -1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const nextPage = ()=>{
        setCurrentPage(currentPage +1)
    };
    const prevPage = ()=>{
        setCurrentPage(currentPage -1)
    };

    return {currentArray, totalPages , nextPage , prevPage, currentPage }
}




// 
// const {currentArray, totalPages , nextPage , prevPage, currentPage } = usePaginate(ArrayEjemplo, 10) << indicamos de cuanto en cuanto se tiene que mostrar el array
return(
    <div>
        {currentArray.map((post)=>(
            <h2 ley{listita.id}>{listita.slug}</h2>
        ))}
        <button variant='contained' onClick={prevPage} disabled={currentPage =1}>volver</button>
        <h2>Estoy en la pagina {currentPage}</h2>
        <button variant='contained'  onClick={nextPage} disabled={currentpage ===totalPages}>siguiente</button>
    </div>

)