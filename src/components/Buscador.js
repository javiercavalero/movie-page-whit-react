import swAlert from '@sweetalert/with-react';
function Buscador() {

    const submitHandler = e => {
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
console.log(keyword);
        if(keyword.length === 0) {
            swAlert({
                text: 'Debes ingresar una palabra clave',
            })
        }else if (keyword.length < 4) {
            swAlert({
                text: 'Debes ingresar más de 4 caracteres',
            })

        };
    }
    



    return (

        <form className="d-flex align-items-center" onSubmit={ submitHandler} >
            <label className='form-label mb-0 mx-2'>
                <input className="form-control me-2" type="text" name='keyword' placeholder="Buscar..." />
            </label>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>

    )
}

export default Buscador
