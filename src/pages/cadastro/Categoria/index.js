import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria,setNomeDaCategoria] = useState('');

    return (
        <PageDefault>
            
            <h1>Página de Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault();
                setCategorias([...categorias,nomeDaCategoria])
            }}>
                <label> Nome da Categoria:
                    <input 
                        type="text" 
                        value={nomeDaCategoria} 
                        onChange={
                            function funcaoHandlerQueOErroPediu(infosDoEvento){
                                setNomeDaCategoria(infosDoEvento.target.value);
                            }
                        }
                    />
                </label>

                <button>Cadastrar</button>
            </form>

            <ul>
                {categorias.map((categoria)=>{
                    return(
                        <li key={categoria}>{categoria}</li>
                    )
                })
                }
            </ul>

            <Link to="/">Ir para home</Link>

        </PageDefault>
    )
}

export default CadastroCategoria;